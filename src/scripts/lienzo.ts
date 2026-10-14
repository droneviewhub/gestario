// =====================================================================
// Lienzo de dibujo reutilizable de Gestario Sport.
// `montarLienzo` conecta un contenedor `.lienzo-marco` con su barra de
// controles (herramienta, color, grosor, referencia, cuadrícula,
// historial, exportar) y devuelve una API pública.
//
// Estructura esperada dentro de `raiz`:
//   .lienzo-marco
//     img.lienzo-referencia[data-ref-img]
//     .grid-overlay[data-grid-overlay]
//     canvas.lienzo-principal[data-lienzo][data-archivo]
//   buttons [data-herramienta] [data-color] [data-ref-toggle]
//   input   [data-grosor] [data-ref-opacidad]
//   output  [data-grosor-val]
//   buttons [data-grid] [data-deshacer] [data-rehacer] [data-limpiar] [data-exportar]
//   span    [data-ref-estado]
// =====================================================================

export interface Lienzo {
  redimensionar(): void;
  deshacer(): void;
  rehacer(): void;
  limpiar(): void;
  exportar(): void;
}

const LIMITE_HISTORIAL = 30;

export function montarLienzo(raiz: HTMLElement, archivo: string): Lienzo {
  const marco = raiz.querySelector<HTMLElement>('[data-lienzo-marco]');
  const canvas = raiz.querySelector<HTMLCanvasElement>('[data-lienzo]');
  const ctx = canvas.getContext('2d');
  const refImg = raiz.querySelector<HTMLImageElement>('[data-ref-img]');
  const gridOverlay = raiz.querySelector<HTMLElement>('[data-grid-overlay]');
  if (!marco || !canvas || !ctx) throw new Error('montarLienzo: faltan elementos del lienzo');

  // ---- estado ----
  let herramienta = 'lapiz';
  let color = '#0b1220';
  let grosor = 4;
  let dibujando = false;
  const historial: ImageData[] = [];
  const rehacer: ImageData[] = [];

  // ---- dimensiones con DPR ----
  function redimensionar() {
    const dpr = window.devicePixelRatio || 1;
    const ancho = marco.clientWidth;
    const alto = marco.clientHeight;
    if (ancho === 0 || alto === 0) return;
    const eraVacio = canvas.width === 0 && canvas.height === 0;
    // conservar el dibujo actual antes de redimensionar
    const anterior = ctx.getImageData(0, 0, canvas.width, canvas.height);
    canvas.width = Math.round(ancho * dpr);
    canvas.height = Math.round(alto * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalCompositeOperation = 'source-over';
    if (anterior.width > 0) ctx.putImageData(anterior, 0, 0);
    // si el lienzo estaba oculto (tamaño 0), regenerar el snapshot inicial válido
    if (eraVacio) {
      historial.length = 0;
      rehacer.length = 0;
      snapshot();
    }
  }

  // ---- historial ----
  function snapshot() {
    historial.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    if (historial.length > LIMITE_HISTORIAL) historial.shift();
    rehacer.length = 0;
    actualizarBotones();
  }

  function aplicarImagen(data: ImageData) {
    canvas.width = data.width;
    canvas.height = data.height;
    const dpr = window.devicePixelRatio || 1;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.putImageData(data, 0, 0);
  }

  function deshacer() {
    const img = historial.pop();
    if (!img) return;
    rehacer.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    aplicarImagen(img);
    actualizarBotones();
  }

  function rehacerAccion() {
    const img = rehacer.pop();
    if (!img) return;
    historial.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    aplicarImagen(img);
    actualizarBotones();
  }

  function limpiar() {
    snapshot();
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    ctx.setTransform(window.devicePixelRatio || 1, 0, 0, window.devicePixelRatio || 1, 0, 0);
    actualizarBotones();
  }

  // ---- puntero (ratón y táctil) ----
  function posicion(e: PointerEvent) {
    const r = canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  function configurarTrazo() {
    if (herramienta === 'borrador') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.strokeStyle = 'rgba(0,0,0,1)';
      ctx.globalAlpha = 1;
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = color;
      ctx.globalAlpha = herramienta === 'marcador' ? 0.85 : 1;
    }
    ctx.lineWidth = herramienta === 'borrador' ? Math.max(grosor, 14) : grosor;
  }

  canvas.addEventListener('pointerdown', (e) => {
    canvas.setPointerCapture(e.pointerId);
    dibujando = true;
    configurarTrazo();
    ctx.beginPath();
    const p = posicion(e);
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(p.x + 0.01, p.y + 0.01);
    ctx.stroke();
  });

  canvas.addEventListener('pointermove', (e) => {
    if (!dibujando) return;
    configurarTrazo();
    const p = posicion(e);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
  });

  function finTrazo() {
    if (!dibujando) return;
    dibujando = false;
    ctx.globalAlpha = 1;
    snapshot();
  }

  canvas.addEventListener('pointerup', finTrazo);
  canvas.addEventListener('pointercancel', finTrazo);

  // ---- herramientas ----
  raiz.querySelectorAll('[data-herramienta]').forEach((btn) => {
    btn.addEventListener('click', () => {
      herramienta = (btn as HTMLElement).dataset.herramienta ?? 'lapiz';
      raiz.querySelectorAll('[data-herramienta]').forEach((b) =>
        b.classList.toggle('herramienta--activa', b === btn)
      );
    });
  });

  // ---- colores ----
  raiz.querySelectorAll('[data-color]').forEach((sw) => {
    sw.addEventListener('click', () => {
      color = (sw as HTMLElement).dataset.color ?? '#0b1220';
      raiz.querySelectorAll('[data-color]').forEach((s) => s.classList.toggle('swatch--activa', s === sw));
    });
  });

  // ---- grosor ----
  const grosorInput = raiz.querySelector<HTMLInputElement>('[data-grosor]');
  const grosorVal = raiz.querySelector<HTMLElement>('[data-grosor-val]');
  grosorInput?.addEventListener('input', () => {
    grosor = Number(grosorInput.value);
    if (grosorVal) grosorVal.textContent = String(grosor);
  });

  // ---- referencia ----
  const refToggle = raiz.querySelector<HTMLElement>('[data-ref-toggle]');
  const refEstado = raiz.querySelector<HTMLElement>('[data-ref-estado]');
  const refOpacidad = raiz.querySelector<HTMLInputElement>('[data-ref-opacidad]');

  function aplicarReferencia() {
    const op = Number(refOpacidad?.value ?? 45) / 100;
    refImg.style.opacity = String(op);
  }
  refOpacidad?.addEventListener('input', aplicarReferencia);
  aplicarReferencia();

  refToggle?.addEventListener('click', () => {
    const visible = refImg.classList.toggle('hidden');
    refToggle.textContent = visible ? 'Mostrar' : 'Ocultar';
    refToggle.setAttribute('aria-pressed', String(!visible));
    refToggle.classList.toggle('chip-estudio--activo', !visible);
    if (refEstado) refEstado.textContent = visible ? 'oculta' : 'visible';
  });

  // ---- cuadrícula ----
  const gridBtn = raiz.querySelector<HTMLElement>('[data-grid]');
  gridBtn?.addEventListener('click', () => {
    const oculta = gridOverlay?.classList.toggle('hidden');
    gridBtn.setAttribute('aria-pressed', String(!oculta));
    gridBtn.classList.toggle('chip-estudio--activo', !oculta);
  });

  // ---- botones de historial / limpiar / exportar ----
  const btnDeshacer = raiz.querySelector<HTMLButtonElement>('[data-deshacer]');
  const btnRehacer = raiz.querySelector<HTMLButtonElement>('[data-rehacer]');
  const btnLimpiar = raiz.querySelector<HTMLElement>('[data-limpiar]');

  function actualizarBotones() {
    if (btnDeshacer) {
      btnDeshacer.disabled = historial.length === 0;
      btnDeshacer.classList.toggle('opacity-40', historial.length === 0);
    }
    if (btnRehacer) {
      btnRehacer.disabled = rehacer.length === 0;
      btnRehacer.classList.toggle('opacity-40', rehacer.length === 0);
    }
  }
  actualizarBotones();

  btnDeshacer?.addEventListener('click', deshacer);
  btnRehacer?.addEventListener('click', rehacerAccion);
  btnLimpiar?.addEventListener('click', limpiar);

  function exportar() {
    const salida = document.createElement('canvas');
    salida.width = canvas.width;
    salida.height = canvas.height;
    const sctx = salida.getContext('2d');
    sctx.fillStyle = '#ffffff';
    sctx.fillRect(0, 0, salida.width, salida.height);
    sctx.drawImage(canvas, 0, 0);
    const link = document.createElement('a');
    link.download = `${archivo}.png`;
    link.href = salida.toDataURL('image/png');
    link.click();
  }
  raiz.querySelector<HTMLElement>('[data-exportar]')?.addEventListener('click', exportar);

  // ---- redimensionar ----
  if ('ResizeObserver' in window) {
    const ro = new ResizeObserver(() => redimensionar());
    ro.observe(marco);
  } else {
    window.addEventListener('resize', redimensionar);
  }

  // Evento global para redimensionar al cambiar de modo/vista
  window.addEventListener('gestario:redimensionar', redimensionar);

  redimensionar();
  // Snapshot del lienzo vacío para poder deshacer el primer trazo
  snapshot();

  return { redimensionar, deshacer, rehacer, limpiar, exportar };
}