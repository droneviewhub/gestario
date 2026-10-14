// Generador de imágenes placeholder (SVG) para Gestario Sport.
// Ejecutar con: node scripts/generar-placeholders.mjs
// Regenera los archivos de public/img/placeholder-*.svg
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT = join(ROOT, 'public', 'img');
mkdirSync(OUT, { recursive: true });

// ---------------------------------------------------------------------------
// Iconos técnicos (trazos sencillos de silueta por disciplina)
// ---------------------------------------------------------------------------
const ICONOS = {
  futbol: `
    <circle cx="300" cy="158" r="56" fill="rgba(255,255,255,0.08)" stroke="#fff" stroke-width="5"/>
    <path d="M300 104 L337 147 L320 193 L280 193 L263 147 Z" fill="rgba(255,255,255,0.22)" stroke="#fff" stroke-width="4"/>
    <path d="M300 104 L300 64 M337 147 L378 147 M320 193 L347 235 M280 193 L253 235 M263 147 L222 147" stroke="rgba(255,255,255,0.5)" stroke-width="4" stroke-linecap="round"/>`,
  baloncesto: `
    <circle cx="300" cy="158" r="56" fill="rgba(255,255,255,0.08)" stroke="#fff" stroke-width="5"/>
    <path d="M266 118 Q300 158 266 198 M334 118 Q300 158 334 198" stroke="rgba(255,255,255,0.55)" stroke-width="4" fill="none"/>
    <path d="M300 158 L334 118 M300 158 L334 198" stroke="rgba(255,255,255,0.55)" stroke-width="4" fill="none" stroke-linecap="round"/>`,
  tenis: `
    <ellipse cx="300" cy="136" rx="66" ry="50" fill="rgba(255,255,255,0.08)" stroke="#fff" stroke-width="5"/>
    <path d="M306 164 L280 196 L306 192 L292 222" stroke="rgba(255,255,255,0.7)" stroke-width="4" stroke-linecap="round"/>
    <path d="M300 136 L300 86 M252 120 L348 152 M252 152 L348 120" stroke="rgba(255,255,255,0.5)" stroke-width="3"/>
    <line x1="300" y1="186" x2="300" y2="252" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
    <circle cx="352" cy="248" r="14" fill="rgba(255,255,255,0.22)" stroke="#fff" stroke-width="4"/>`,
  voleibol: `
    <circle cx="300" cy="158" r="56" fill="rgba(255,255,255,0.08)" stroke="#fff" stroke-width="5"/>
    <path d="M258 128 Q300 158 258 188" stroke="rgba(255,255,255,0.55)" stroke-width="4" fill="none"/>
    <path d="M342 128 Q300 158 342 188" stroke="rgba(255,255,255,0.55)" stroke-width="4" fill="none"/>
    <path d="M300 102 Q336 158 300 214" stroke="rgba(255,255,255,0.55)" stroke-width="4" fill="none"/>`,
  natacion: `
    <circle cx="300" cy="112" r="30" fill="rgba(255,255,255,0.08)" stroke="#fff" stroke-width="5"/>
    <circle cx="300" cy="112" r="12" fill="rgba(255,255,255,0.25)"/>
    <path d="M300 142 Q282 178 300 196 Q318 214 300 240" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M262 180 Q230 200 196 194 M338 182 Q374 204 410 192" stroke="rgba(255,255,255,0.75)" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M150 268 q32 -22 64 0 t64 0 t64 0 t64 0 t64 0" stroke="rgba(255,255,255,0.4)" stroke-width="4" fill="none" stroke-linecap="round"/>`,
  atletismo: `
    <circle cx="262" cy="104" r="24" fill="rgba(255,255,255,0.08)" stroke="#fff" stroke-width="5"/>
    <path d="M268 128 L296 178" stroke="#fff" stroke-width="7" stroke-linecap="round"/>
    <path d="M282 140 L238 164 L224 196" stroke="#fff" stroke-width="6" stroke-linecap="round" fill="none"/>
    <path d="M294 152 L348 136 L362 102" stroke="#fff" stroke-width="6" stroke-linecap="round" fill="none"/>
    <path d="M296 178 L284 240 M296 178 L356 232" stroke="#fff" stroke-width="6" stroke-linecap="round" fill="none"/>
    <path d="M236 270 Q284 232 356 244" stroke="rgba(255,255,255,0.45)" stroke-width="4" fill="none" stroke-linecap="round"/>`,
  ciclismo: `
    <circle cx="212" cy="226" r="46" fill="rgba(255,255,255,0.06)" stroke="#fff" stroke-width="6"/>
    <circle cx="388" cy="226" r="46" fill="rgba(255,255,255,0.06)" stroke="#fff" stroke-width="6"/>
    <circle cx="212" cy="226" r="7" fill="#fff"/><circle cx="388" cy="226" r="7" fill="#fff"/>
    <path d="M228 208 L276 208 L272 158 L300 128 L328 158 L324 208 L372 208" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M276 208 L300 232 L324 208" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round"/>
    <circle cx="300" cy="118" r="20" fill="rgba(255,255,255,0.10)" stroke="#fff" stroke-width="4"/>`,
  gimnasia: `
    <path d="M300 268 C230 268 214 120 282 108 C344 97 372 180 316 212 C266 240 280 96 340 84" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round"/>
    <circle cx="300" cy="96" r="18" stroke="rgba(255,255,255,0.6)" stroke-width="4" fill="none"/>
    <circle cx="300" cy="96" r="6" fill="rgba(255,255,255,0.6)"/>`,
  hero: `
    <circle cx="248" cy="128" r="30" fill="rgba(255,255,255,0.10)" stroke="#fff" stroke-width="6"/>
    <path d="M252 158 L284 210" stroke="#fff" stroke-width="8" stroke-linecap="round"/>
    <path d="M270 172 L230 200 L214 238" stroke="#fff" stroke-width="7" stroke-linecap="round" fill="none"/>
    <path d="M286 186 L336 168 L352 128" stroke="#fff" stroke-width="7" stroke-linecap="round" fill="none"/>
    <path d="M284 210 L268 276 M284 210 L350 266" stroke="#fff" stroke-width="7" stroke-linecap="round" fill="none"/>
    <path d="M284 210 L312 226 L300 258" stroke="rgba(255,255,255,0.7)" stroke-width="5" stroke-linecap="round" fill="none"/>
    <path d="M196 310 q35 -24 70 0 t70 0 t70 0 t70 0 t70 0" stroke="rgba(255,255,255,0.5)" stroke-width="5" fill="none" stroke-linecap="round"/>`,
};

const plantilla = (accent, nombre, icono) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" role="img" aria-label="Placeholder: ${nombre}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${accent}"/>
      <stop offset="1" stop-color="#0b1220"/>
    </linearGradient>
    <pattern id="rayas" width="46" height="46" patternUnits="userSpaceOnUse" patternTransform="rotate(18)">
      <rect width="46" height="46" fill="none"/>
      <rect width="23" height="46" fill="rgba(255,255,255,0.05)"/>
    </pattern>
  </defs>
  <rect width="600" height="400" fill="url(#bg)"/>
  <rect width="600" height="400" fill="url(#rayas)"/>
  <rect x="22" y="22" width="556" height="356" rx="18" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-dasharray="10 8"/>
  <rect x="22" y="22" width="150" height="34" rx="6" fill="rgba(255,255,255,0.12)"/>
  <text x="97" y="44" text-anchor="middle" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="700" letter-spacing="3" fill="#ffffff">PLACEHOLDER</text>
  <g>${icono}</g>
  <text x="300" y="330" text-anchor="middle" font-family="ui-sans-serif, system-ui, sans-serif" font-size="40" font-weight="800" letter-spacing="2" fill="#ffffff">${nombre.toUpperCase()}</text>
  <text x="300" y="362" text-anchor="middle" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" letter-spacing="1" fill="rgba(255,255,255,0.75)">Reemplazar por imagen técnica real</text>
</svg>`;

// ---------------------------------------------------------------------------
// Definición y generación
// ---------------------------------------------------------------------------
const DISCIPLINAS = [
  { slug: 'hero', color: '#22d3ee' },
  { slug: 'futbol', color: '#0ea556' },
  { slug: 'baloncesto', color: '#ea580c' },
  { slug: 'tenis', color: '#bfc31b' },
  { slug: 'voleibol', color: '#eab308' },
  { slug: 'natacion', color: '#0284c7' },
  { slug: 'atletismo', color: '#7c3aed' },
  { slug: 'ciclismo', color: '#d9413b' },
  { slug: 'gimnasia', color: '#db2777' },
];

const nombres = {
  hero: 'Gestario Sport',
  futbol: 'Fútbol',
  baloncesto: 'Baloncesto',
  tenis: 'Tenis',
  voleibol: 'Voleibol',
  natacion: 'Natación',
  atletismo: 'Atletismo',
  ciclismo: 'Ciclismo',
  gimnasia: 'Gimnasia',
};

for (const { slug, color } of DISCIPLINAS) {
  const archivo = join(OUT, `placeholder-${slug}.svg`);
  writeFileSync(archivo, plantilla(color, nombres[slug], ICONOS[slug] ?? ICONOS.hero));
  console.log('✔', `placeholder-${slug}.svg`);
}

console.log(`\nSe generaron ${DISCIPLINAS.length} placeholders en public/img/`);