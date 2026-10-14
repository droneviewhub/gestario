# 🖍️ Gestario Sport

Sistema de ayuda para **mejorar la técnica deportiva** en diversas disciplinas **por medio de dibujos** que el deportista realiza. El deportista observa una imagen guía de la técnica y la reproduce con trazos sobre un lienzo digital. Inspirado en el pitch del proyecto: *"un sistema que **descompone los gestos deportivos en posiciones clave** y utiliza el dibujo para observarlos, comprenderlos y llevar ese aprendizaje a una mejor ejecución técnica"*.

Cada ejercicio ofrece dos modos:

- 🖼️ **Lienzo único** — dibuja el gesto completo sobre una referencia.
- 🧩 **Proceso por secuencia** — descompón el gesto en **posiciones clave** (4 pasos por ejercicio) y dibuja cada una en su propio mini-lienzo, con barra de progreso, stepper y descarga de todos los pasos.

## 🚀 Stack

- **Astro 7** — generación de sitios estáticos + rutas dinámicas
- **Tailwind CSS 4** — estilos utilitarios (configuración en `src/styles/global.css`)
- **Vanilla JS** — estudio de dibujo sobre `<canvas>` con soporte de ratón y táctil

## 📁 Estructura

```
gestario-sport/
├── astro.config.mjs          # Config (Vite + Tailwind)
├── scripts/
│   └── generar-placeholders.mjs   # Genera las imágenes placeholder (SVG)
├── public/
│   └── img/
│       └── placeholder-*.svg      # Imágenes placeholder por disciplina
└── src/
    ├── data/disciplinas.ts        # Disciplinas y ejercicios (fuente de verdad)
    ├── layouts/Layout.astro       # Layout base (head, header, footer)
    ├── components/
    │   ├── Header.astro / Footer.astro
    │   ├── DisciplinaCard.astro
    │   └── EstudioDibujo.astro    # Estudio de dibujo sobre lienzo
    ├── pages/
    │   ├── index.astro
    │   ├── disciplinas.astro
    │   ├── disciplinas/[slug].astro
    │   ├── entrenamiento/[slug].astro   # Estudio de dibujo por ejercicio
    │   └── metodo.astro
    └── styles/global.css         # Tema y componentes de Tailwind
```

## 🧩 Proceso por secuencia

Siguiendo el método del pitch, cada uno de los 24 ejercicios tiene una `secuencia` de
**4 posiciones clave** definida en `src/data/disciplinas.ts`. El modo secuencia
(`/entrenamiento/<slug>#secuencia`) muestra:

- Barra de progreso y contador de pasos
- Stepper clicable por posición clave
- Un lienzo con herramientas (lápiz, marcador, borrador, 10 colores, grosor, guía y cuadrícula) por cada paso
- Los dibujos se conservan al navegar entre pasos
- Descarga individual (PNG) o de todos los pasos abiertos

La lógica de lienzo está compartida entre el lienzo único y los pasos de secuencia en
`src/scripts/lienzo.ts` (`montarLienzo`).

## ▶️ Uso

```bash
npm install
npm run dev        # desarrollo
npm run build      # build estático
npm run preview    # previsualizar build
npm run placeholders  # regenerar los SVG placeholder en public/img/
```

## ℹ️ Sobre las imágenes placeholder

Las imágenes de referencia y de las tarjetas son **placeholders** generados por
`scripts/generar-placeholders.mjs`. Cada disciplina tiene:

- `public/img/placeholder-hero.svg` — ilustración de la portada
- `public/img/placeholder-<slug>.svg` — referencia técnica de la disciplina

Para usar material real: sustituye el archivo SVG por tu imagen (PNG/JPG/SVG) **manteniendo
el mismo nombre y ruta**. El estudio de dibujo la cargará automáticamente. Puedes ajustar la
transparencia de la guía desde el panel de herramientas.

## 🎨 Estudio de dibujo

El lienzo incluye (lienzo único y por paso de secuencia):

- Herramientas: lápiz, marcador y borrador
- Paleta de 10 colores y grosor de trazo configurable
- Guía de referencia con **transparencia y ocultar/mostrar** (fases del método)
- Cuadrícula proporcional, deshacer/rehacer y limpiar
- Exportación del dibujo en PNG
- Funciona con ratón, dedo y lápiz táctil (pointer events)

Las rutas dinámicas `entrenamiento/[slug]` se generan a partir de `src/data/disciplinas.ts`
(8 disciplinas × 3 ejercicios = 24 ejercicios × 4 posiciones clave = 96 pasos de secuencia).

## ✅ Cómo añadir un ejercicio

1. Añade el ejercicio al array `ejercicios` de su disciplina en `src/data/disciplinas.ts`
   con un `slug` único, nombre, objetivo, consigna de dibujo, consejo, duración y su
   `secuencia` de posiciones clave (3-5 pasos con `titulo` y `consigna`).
2. Se generan automáticamente su estudio y su proceso de secuencia en `/entrenamiento/<slug>` al hacer build.