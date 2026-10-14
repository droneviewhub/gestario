// =====================================================================
// Datos de disciplinas y ejercicios de dibujo técnico de Gestario Sport
// Las imágenes `referencia` son placeholders (public/img/*.svg)
// que deben sustituirse por material técnico real.
// =====================================================================

export type Categoria = 'pelota' | 'acua' | 'atle' | 'otras';

export interface Paso {
  titulo: string;      // Nombre de la posición/fase clave
  consigna: string;    // Instrucción de dibujo para ese paso
}

export interface Ejercicio {
  slug: string;
  nombre: string;      // Nombre del ejercicio de dibujo
  objetivo: string;    // Qué se busca mejorar
  consigna: string;    // Instrucción de dibujo para el deportista
  consejo: string;     // Tip técnico
  duracion: number;    // Minutos estimados
  secuencia: Paso[];   // Proceso por secuencia: posiciones clave del gesto
}

export interface Disciplina {
  slug: string;
  nombre: string;
  categoria: Categoria;
  color: string;       // Color de acento (hex)
  icono: string;       // indicador simple para el card
  descripcion: string;
  imagen: string;      // Ruta del placeholder
  ejercicios: Ejercicio[];
}

export const disciplinas: Disciplina[] = [
  {
    slug: 'futbol',
    nombre: 'Fútbol',
    categoria: 'pelota',
    color: '#0ea556',
    icono: '⚽',
    descripcion:
      'Trabaja conducción, pase y remate trazando trayectorias, apoyos y orientación corporal sobre la referencia.',
    imagen: '/img/placeholder-futbol.svg',
    ejercicios: [
      {
        slug: 'futbol-conduccion',
        nombre: 'Trayectoria de conducción',
        objetivo: 'Precisión del autopase y control orientado',
        consigna: 'Dibuja la trayectoria del balón y la posición del pie de apoyo en los tres controles.',
        consejo: 'El pie de apoyo debe apuntar siempre hacia donde quieres progresar.',
        duracion: 8,
        secuencia: [
          { titulo: 'Posición de salida', consigna: 'Dibuja el pie de apoyo junto al balón, el tronco ligeramente inclinado y la cabeza levantada.' },
          { titulo: 'Contacto con el interior', consigna: 'Traza el ángulo del pie de contacto y la dirección del primer autopase.' },
          { titulo: 'Progresión hacia delante', consigna: 'Dibuja la trayectoria del balón hacia delante y el siguiente paso del pie de apoyo.' },
          { titulo: 'Control orientado', consigna: 'Marca el brazo de equilibrio y la dirección final del control orientado.' },
        ],
      },
      {
        slug: 'futbol-pase',
        nombre: 'Ángulos de pase',
        objetivo: 'Lectura de líneas de pase',
        consigna: 'Traza las líneas de pase posibles y marca con una X la más segura.',
        consejo: 'Un pase filtrado entre líneas abre más juego que uno directo.',
        duracion: 6,
        secuencia: [
          { titulo: 'Lectura del campo', consigna: 'Dibuja los huecos entre rivales y todas las líneas de pase posibles.' },
          { titulo: 'Preparación del golpeo', consigna: 'Traza la posición del pie de apoyo apuntando hacia el destino del pase.' },
          { titulo: 'Contacto y dirección', consigna: 'Dibuja la línea del pase seguro y el ángulo del empeine en el contacto.' },
          { titulo: 'Seguimiento', consigna: 'Marca la dirección de la cadera y el equilibrio del cuerpo tras soltar el pase.' },
        ],
      },
      {
        slug: 'futbol-remate',
        nombre: 'Cadera y remate',
        objetivo: 'Posición de la cadera en el golpeo',
        consigna: 'Dibuja la apertura de cadera y la trayectoria ascendente del balón.',
        consejo: 'Caderas abiertas a la hora del impacto, cabeza del cuerpo quieta.',
        duracion: 7,
        secuencia: [
          { titulo: 'Aproximación', consigna: 'Dibuja la diagonal de aproximación al balón con los últimos pasos más cortos.' },
          { titulo: 'Pie de apoyo', consigna: 'Marca el pie de apoyo junto al balón y la apertura de la cadera.' },
          { titulo: 'Golpeo', consigna: 'Traza el interior del pie y la trayectoria ascendente del balón hacia la portería.' },
          { titulo: 'Seguimiento del golpe', consigna: 'Dibuja la dirección de la pierna tras el impacto y el descenso del cuerpo.' },
        ],
      },
    ],
  },
  {
    slug: 'baloncesto',
    nombre: 'Baloncesto',
    categoria: 'pelota',
    color: '#ea580c',
    icono: '🏀',
    descripcion:
      'Perfecciona el tiro, el bote y la defensa dibujando ángulos de lanzamiento y desplazamientos.',
    imagen: '/img/placeholder-baloncesto.svg',
    ejercicios: [
      {
        slug: 'baloncesto-tiro',
        nombre: 'Arco de tiro',
        objetivo: 'Trayectoria alta y muñeca en el lanzamiento',
        consigna: 'Dibuja el arco del lanzamiento y la flexión de muñeca en el punto de suelta.',
        consejo: 'Un arco alto aumenta el radio de acierto: apunta a 60°.',
        duracion: 8,
        secuencia: [
          { titulo: 'Plataforma de tiro', consigna: 'Dibuja la flexión de rodillas y la cadena de articulaciones alineada.' },
          { titulo: 'Extensión del brazo', consigna: 'Traza la subida del balón y la alineación codo-muñeca hacia el aro.' },
          { titulo: 'Suelta', consigna: 'Marca el punto de suelta y el latigazo final de la muñeca.' },
          { titulo: 'Seguimiento', consigna: 'Dibuja el brazo completo extendido hacia el aro y el arco del balón.' },
        ],
      },
      {
        slug: 'baloncesto-bote',
        nombre: 'Mapa de bote',
        objetivo: 'Bote con la mano dominante',
        consigna: 'Marca los puntos de bote en un recorrido en zigzag y los cambios de mano.',
        consejo: 'Bote de altura media, dedos abiertos y mirada arriba.',
        duracion: 6,
        secuencia: [
          { titulo: 'Postura base', consigna: 'Dibuja los pies separados, las rodillas flexionadas y el balón protegido.' },
          { titulo: 'Puntos de bote', consigna: 'Marca los puntos de contacto del balón a lo largo del recorrido.' },
          { titulo: 'Cambios de mano', consigna: 'Traza el cruce del balón y el paso lateral que acompaña el cambio.' },
          { titulo: 'Aceleración final', consigna: 'Completa el zigzag y dibuja la dirección de avance hacia la canasta.' },
        ],
      },
      {
        slug: 'baloncesto-defensa',
        nombre: 'Deslizamientos defensivos',
        objetivo: 'Base de trabajo en defensa',
        consigna: 'Dibuja los deslizamientos laterales manteniendo el centro de gravedad bajo.',
        consejo: 'Nunca cruces los pies: desliza el pie de arrastre.',
        duracion: 7,
        secuencia: [
          { titulo: 'Base defensiva', consigna: 'Dibuja pies separados, cadera baja y manos activas frente al atacante.' },
          { titulo: 'Deslizamiento lateral', consigna: 'Traza el deslizamiento de costado sin cruzar los pies.' },
          { titulo: 'Cambio de dirección', consigna: 'Marca el pivote de cadera y el cambio de paso al seguir al atacante.' },
          { titulo: 'Recuperación', consigna: 'Dibuja la posición de reequilibrio tras el deslizamiento.' },
        ],
      },
    ],
  },
  {
    slug: 'tenis',
    nombre: 'Tenis',
    categoria: 'pelota',
    color: '#bfc31b',
    icono: '🎾',
    descripcion:
      'Mejora el saque, el drive y el revés dibujando swings, puntos de impacto y preparación.',
    imagen: '/img/placeholder-tenis.svg',
    ejercicios: [
      {
        slug: 'tenis-saque',
        nombre: 'Péndulo del saque',
        objetivo: 'Coordinación del lanzamiento con el golpe',
        consigna: 'Dibuja el arco de la raqueta y el punto más alto de impacto.',
        consejo: 'Impacta el balón en el punto más alto: más ángulo y más potencia.',
        duracion: 8,
        secuencia: [
          { titulo: 'Posición de espera', consigna: 'Dibuja los pies alineados a la línea y la raqueta preparada detrás.' },
          { titulo: 'Lanzamiento', consigna: 'Traza la trayectoria del lanzamiento hasta el punto más alto.' },
          { titulo: 'Coordinar y golpear', consigna: 'Dibuja el arco de la raqueta y el punto de impacto sobre el hombro.' },
          { titulo: 'Terminación', consigna: 'Marca la caída de la muñeca y la protección del hombro al final del swing.' },
        ],
      },
      {
        slug: 'tenis-drive',
        nombre: 'Swing del drive',
        objetivo: 'Recorrido de la raqueta hacia delante',
        consigna: 'Traza la preparación, el camino de la raqueta y la terminación sobre el hombro.',
        consejo: 'De abajo hacia arriba y de dentro hacia fuera; el brazo acaba cruzando el cuerpo.',
        duracion: 6,
        secuencia: [
          { titulo: 'Preparación', consigna: 'Dibuja el giro de hombros y la raqueta llevada atrás.' },
          { titulo: 'Bucle de la raqueta', consigna: 'Traza el camino de la raqueta de abajo hacia arriba.' },
          { titulo: 'Impacto', consigna: 'Marca el contacto con la pelota delante del cuerpo, a la altura de la cadera.' },
          { titulo: 'Seguimiento', consigna: 'Dibuja la terminación de la raqueta sobre el hombro contrario.' },
        ],
      },
      {
        slug: 'tenis-reves',
        nombre: 'Reves plan',
        objetivo: 'Giro de hombros y línea de raqueta',
        consigna: 'Dibuja el giro de hombros y la línea de la raqueta a la altura de la cadera.',
        consejo: 'Hombro opuesto mirando a la red; la raqueta sube al terminar.',
        duracion: 6,
        secuencia: [
          { titulo: 'Giro de hombros', consigna: 'Dibuja las dos manos en la empuñadura y el hombro mirando a la red.' },
          { titulo: 'Línea de la raqueta', consigna: 'Traza la raqueta a la altura de la cadera, paralela al suelo.' },
          { titulo: 'Impacto', consigna: 'Marca el contacto con la pelota delante del pie delantero.' },
          { titulo: 'Terminación alta', consigna: 'Dibuja la subida de la raqueta y el bloqueo del codo tras el golpe.' },
        ],
      },
    ],
  },
  {
    slug: 'voleibol',
    nombre: 'Voleibol',
    categoria: 'pelota',
    color: '#eab308',
    icono: '🏐',
    descripcion:
      'Dibuja remates, recepciones y saques para asentar la postura de manos y el salto.',
    imagen: '/img/placeholder-voleibol.svg',
    ejercicios: [
      {
        slug: 'voleibol-remate',
        nombre: 'Secuencia de remate',
        objetivo: 'Despegue, arqueo y muñeca',
        consigna: 'Dibuja el despegue del remate con el arqueo del torso y la caída de la muñeca.',
        consejo: 'Muñeca relajada al contacto; el golpe es un latigazo.',
        duracion: 7,
        secuencia: [
          { titulo: 'Despegue', consigna: 'Dibuja la batida con ambos pies y el salto vertical hacia el balón.' },
          { titulo: 'Arqueo', consigna: 'Traza el arqueo del torso y el codo llevado hacia atrás.' },
          { titulo: 'Impacto', consigna: 'Marca el contacto en el punto más alto con la muñeca activa.' },
          { titulo: 'Caída', consigna: 'Dibuja la amortiguación del aterrizaje y la recuperación del equilibrio.' },
        ],
      },
      {
        slug: 'voleibol-recepcion',
        nombre: 'Plataforma de antebrazos',
        objetivo: 'Ángulo de la plataforma',
        consigna: 'Traza la línea de los antebrazos y el ángulo de recepción hacia el colocador.',
        consejo: 'Antebrazos firmes, hombros por delante de las rodillas.',
        duracion: 5,
        secuencia: [
          { titulo: 'Atención', consigna: 'Dibuja la posición de alerta con las manos frente al pecho.' },
          { titulo: 'Plataforma', consigna: 'Traza la línea de los antebrazos y la extensión de las rodillas.' },
          { titulo: 'Ángulo directo', consigna: 'Marca el ángulo de la plataforma dirigido hacia el colocador.' },
          { titulo: 'Movimiento', consigna: 'Dibuja el desplazamiento de las piernas hacia el balón.' },
        ],
      },
      {
        slug: 'voleibol-saque',
        nombre: 'Saque en suspensión',
        objetivo: 'Coordinación salto-golpeo',
        consigna: 'Dibuja la parábola del balón y el instante de impacto sobre el pico del salto.',
        consejo: 'Lanza el balón un poco por delante para impactar con extensión completa.',
        duracion: 6,
        secuencia: [
          { titulo: 'Lanzamiento', consigna: 'Dibuja el lanzamiento de la pelota ligeramente hacia delante.' },
          { titulo: 'Arco del brazo', consigna: 'Traza el brazo de golpe llevado atrás y el otro extendido.' },
          { titulo: 'Impacto alto', consigna: 'Marca el contacto en el pico del salto con la mano abierta.' },
          { titulo: 'Parábola', consigna: 'Completa la trayectoria de la pelota por encima de la red.' },
        ],
      },
    ],
  },
  {
    slug: 'natacion',
    nombre: 'Natación',
    categoria: 'acua',
    color: '#0284c7',
    icono: '🏊',
    descripcion:
      'Corrige el crol, la espalda y la braza dibujando la línea del cuerpo, la respiración y la patada.',
    imagen: '/img/placeholder-natacion.svg',
    ejercicios: [
      {
        slug: 'natacion-crol',
        nombre: 'Línea corporal en crol',
        objetivo: 'Flotación horizontal y rolido',
        consigna: 'Dibuja la línea del cuerpo y el eje de rolido del tronco en cada brazada.',
        consejo: 'La cabeza alineada con la columna: mira al fondo, no hacia delante.',
        duracion: 8,
        secuencia: [
          { titulo: 'Deslizamiento', consigna: 'Dibuja el cuerpo totalmente alineado con la cabeza mirando al fondo.' },
          { titulo: 'Rolido del tronco', consigna: 'Traza el eje de rotación del hombro-cadera en cada brazada.' },
          { titulo: 'Recobro del brazo', consigna: 'Dibuja el codo alto y la entrada de la mano en el agua.' },
          { titulo: 'Tirón bajo el agua', consigna: 'Marca la trayectoria en S de la mano bajo el cuerpo.' },
        ],
      },
      {
        slug: 'natacion-espalda',
        nombre: 'Respiración y brazada de espalda',
        objetivo: 'Toma de aire sin cortar el ritmo',
        consigna: 'Dibuja el ciclo de brazada y el momento exacto de la inspiración.',
        consejo: 'Inspira en la recuperación del brazo, expulsa de forma continua bajo el agua.',
        duracion: 7,
        secuencia: [
          { titulo: 'Flotación dorsal', consigna: 'Dibuja la línea de la cadera alta y la cabeza relajada.' },
          { titulo: 'Entrada de la mano', consigna: 'Traza la entrada de la mano en la prolongación del hombro.' },
          { titulo: 'Rotación de hombros', consigna: 'Marca el giro del hombro que acompaña cada brazada.' },
          { titulo: 'Patada y respiración', consigna: 'Dibuja la patada de seis tiempos y el instante de la inspiración.' },
        ],
      },
      {
        slug: 'natacion-braza',
        nombre: 'Onda de la braza',
        objetivo: 'Deslizamiento y patada de rana',
        consigna: 'Traza la onda del tronco y la fase de deslizamiento con los brazos extendidos.',
        consejo: 'Aprovecha el deslizamiento: la velocidad vive entre brazada y brazada.',
        duracion: 7,
        secuencia: [
          { titulo: 'Deslizamiento', consigna: 'Dibuja el cuerpo estirado con brazos y piernas completamente extendidos.' },
          { titulo: 'Tirón circular', consigna: 'Traza el semicírculo de las manos hacia fuera y hacia dentro.' },
          { titulo: 'Recuperación y patada', consigna: 'Marca la patada de rana mientras los brazos vuelven a estirarse.' },
          { titulo: 'Glide y respiración', consigna: 'Dibuja la inspiración con la cabeza fuera del agua y el deslizamiento final.' },
        ],
      },
    ],
  },
  {
    slug: 'atletismo',
    nombre: 'Atletismo',
    categoria: 'atle',
    color: '#7c3aed',
    icono: '🏃',
    descripcion:
      'Dibuja zancadas, salidas y saltos para fijar el ritmo, la postura y la fase de impulso.',
    imagen: '/img/placeholder-atletismo.svg',
    ejercicios: [
      {
        slug: 'atletismo-zancada',
        nombre: 'Sillita de la zancada',
        objetivo: 'Fase de vuelo y apoyo',
        consigna: 'Dibuja el ángulo de la pierna delantera y la recogida de la trasera en la zancada.',
        consejo: 'Cadera adelante, pie aterrizando debajo del cuerpo, no por delante.',
        duracion: 7,
        secuencia: [
          { titulo: 'Fase de vuelo', consigna: 'Dibuja la zancada en el aire con la pierna delantera en “sillita”.' },
          { titulo: 'Recogida del talón', consigna: 'Traza la recogida del talón de la pierna trasera bajo el glúteo.' },
          { titulo: 'Apoyo', consigna: 'Marca el aterrizaje con el pie debajo del centro de gravedad.' },
          { titulo: 'Impulso', consigna: 'Dibuja la extensión de la cadera y la pierna que empuja hacia atrás.' },
        ],
      },
      {
        slug: 'atletismo-salida',
        nombre: 'Salida de tacos',
        objetivo: 'Empuje explosivo',
        consigna: 'Traza los ángulos de las piernas en el taco y la dirección del primer impulso.',
        consejo: 'El primer paso es corto y agresivo: empuja contra el taco, no arrastres.',
        duracion: 6,
        secuencia: [
          { titulo: 'En los tacos', consigna: 'Dibuja los pies apoyados en los tacos y los brazos sobre la línea.' },
          { titulo: 'Ángulos cargados', consigna: 'Traza los ángulos de las piernas flexionadas y la espalda alineada.' },
          { titulo: 'Empuje explosivo', consigna: 'Marca la dirección del primer impulso y el paso corto hacia delante.' },
          { titulo: 'Aceleración', consigna: 'Dibuja la progresión de la zancada y la inclinación del tronco.' },
        ],
      },
      {
        slug: 'atletismo-salto',
        nombre: 'Salto de longitud',
        objetivo: 'Batida y vuelo',
        consigna: 'Dibuja la batida con el pie plano y la posición de "paso en el aire".',
        consejo: 'Batida vertical contra el suelo; la cabeza y el pecho suben juntos.',
        duracion: 6,
        secuencia: [
          { titulo: 'Aproximación', consigna: 'Dibuja la aceleración controlada con el último paso más corto.' },
          { titulo: 'Batida', consigna: 'Traza la batida con el pie plano y el empuje vertical.' },
          { titulo: 'Vuelo', consigna: 'Marca la posición de “paso en el aire” con los brazos equilibrados.' },
          { titulo: 'Caída', consigna: 'Dibuja la caída con las piernas extendidas hacia delante.' },
        ],
      },
    ],
  },
  {
    slug: 'ciclismo',
    nombre: 'Ciclismo',
    categoria: 'otras',
    color: '#d9413b',
    icono: '🚴',
    descripcion:
      'Analiza el pedaleo, la posición aerodinámica y la frenada dibujando los vectores de fuerza.',
    imagen: '/img/placeholder-ciclismo.svg',
    ejercicios: [
      {
        slug: 'ciclismo-pedaleo',
        nombre: 'Ciclo de pedaleo',
        objetivo: 'Fuerza circular en el pedaleo',
        consigna: 'Dibuja el círculo del pedaleo y las fases de empuje (3h) y recogida (9h).',
        consejo: 'Empuja hacia delante en la caída, no solo hacia abajo.',
        duracion: 8,
        secuencia: [
          { titulo: 'Posición en el sillín', consigna: 'Dibuja la altura del sillín y la rodilla sobre el eje del pedal.' },
          { titulo: 'Fase de empuje', consigna: 'Traza el empuje hacia delante de la pierna a las 3 en punto.' },
          { titulo: 'Fase de recogida', consigna: 'Marca el tirón hacia arriba de la pierna a las 9 en punto.' },
          { titulo: 'Ciclo completo', consigna: 'Completa el círculo del pedaleo con una cadencia constante.' },
        ],
      },
      {
        slug: 'ciclismo-posicion',
        nombre: 'Posición aerodinámica',
        objetivo: 'Sillín y retroceso',
        consigna: 'Traza la línea de la plomada (rodilla sobre el eje) y el ángulo del tronco.',
        consejo: 'Espalda recta y codo cerrado: menos resistencia, más comodidad.',
        duracion: 7,
        secuencia: [
          { titulo: 'Plomada de la rodilla', consigna: 'Dibuja la vertical de la rodilla sobre el eje del pedal.' },
          { titulo: 'Ángulo del tronco', consigna: 'Traza el tronco inclinado con la espalda recta.' },
          { titulo: 'Codos y manos', consigna: 'Marca los codos cerrados y el agarre ligero del manillar.' },
          { titulo: 'Línea de la cadera', consigna: 'Dibuja la cadera estable y cómoda sobre el sillín.' },
        ],
      },
      {
        slug: 'ciclismo-frenada',
        nombre: 'Distancia de frenada',
        objetivo: 'Frenado equilibrado',
        consigna: 'Dibuja el punto de inicio del freno y reparte la fuerza entre ambos frenos.',
        consejo: '70% freno delantero, 30% trasero, cuerpo atrás en bajadas.',
        duracion: 5,
        secuencia: [
          { titulo: 'Punto de inicio', consigna: 'Dibuja el punto de la carretera donde comienzas a frenar.' },
          { titulo: 'Reparto de fuerza', consigna: 'Traza el 70% de fuerza en el freno delantero y 30% en el trasero.' },
          { titulo: 'Posición del cuerpo', consigna: 'Marca el cuerpo desplazado hacia atrás en las bajadas.' },
          { titulo: 'Distancia total', consigna: 'Completa el recorrido de frenada manteniendo el control de la dirección.' },
        ],
      },
    ],
  },
  {
    slug: 'gimnasia',
    nombre: 'Gimnasia',
    categoria: 'otras',
    color: '#db2777',
    icono: '🤸',
    descripcion:
      'Dibuja el pino, los giros y los saltos para dominar la alineación y el cambio de apoyos.',
    imagen: '/img/placeholder-gimnasia.svg',
    ejercicios: [
      {
        slug: 'gimnasia-pino',
        nombre: 'Línea del pino',
        objetivo: 'Alineación de cuerpo en vertical',
        consigna: 'Dibuja la línea vertical de orejas-cadera-tobillos y la apertura de hombros.',
        consejo: 'Empuja el suelo con los dedos y agarra el piso con las palmas.',
        duracion: 5,
        secuencia: [
          { titulo: 'Empuje de manos', consigna: 'Dibuja las manos abiertas y los dedos agarrando el suelo.' },
          { titulo: 'Verticalidad', consigna: 'Traza la línea de orejas, cadera y tobillos en vertical.' },
          { titulo: 'Apertura de hombros', consigna: 'Marca los hombros presionando activamente hacia arriba.' },
          { titulo: 'Equilibrio final', consigna: 'Completa el pino estable con el cuerpo completamente alineado.' },
        ],
      },
      {
        slug: 'gimnasia-giro',
        nombre: 'Giro en tándem',
        objetivo: 'Eje vertical y mirada',
        consigna: 'Traza el eje del giro y la posición del "spotting" (mirada fija).',
        consejo: 'La cabeza guía el giro; mira un punto fijo al terminar.',
        duracion: 6,
        secuencia: [
          { titulo: 'Eje vertical', consigna: 'Dibuja el eje de rotación que atraviesa el cuerpo.' },
          { titulo: 'Mirada fija', consigna: 'Marca el punto de spotting para mantener el equilibrio.' },
          { titulo: 'Brazos en guardia', consigna: 'Traza los brazos junto al cuerpo, ligeramente separados.' },
          { titulo: 'Frenado', consigna: 'Dibuja la fijación de la mirada y el cierre del giro.' },
        ],
      },
      {
        slug: 'gimnasia-salto',
        nombre: 'Salto de potro',
        objetivo: 'Fase de vuelo',
        consigna: 'Dibuja la parábola del salto y la extensión completa antes del apoyo.',
        consejo: 'Manos adelante del centro de masa para empujar y despegar.',
        duracion: 7,
        secuencia: [
          { titulo: 'Carrera de aproximación', consigna: 'Dibuja la carrera controlada con los brazos atrás.' },
          { titulo: 'Apoyo de manos', consigna: 'Marca las manos sobre el potro antes del centro de masa.' },
          { titulo: 'Empuje y vuelo', consigna: 'Traza la fase de vuelo con el cuerpo completamente extendido.' },
          { titulo: 'Recepción', consigna: 'Dibuja la recepción con las rodillas semiflexionadas.' },
        ],
      },
    ],
  },
];

export function getDisciplina(slug: string): Disciplina | undefined {
  return disciplinas.find((d) => d.slug === slug);
}

export function getEjercicio(slug: string): { ejercicio: Ejercicio; disciplina: Disciplina } | undefined {
  for (const disciplina of disciplinas) {
    const ejercicio = disciplina.ejercicios.find((e) => e.slug === slug);
    if (ejercicio) return { ejercicio, disciplina };
  }
  return undefined;
}

export function getDisciplinasPorCategoria(categoria: string): Disciplina[] {
  if (categoria === 'todas') return disciplinas;
  return disciplinas.filter((d) => d.categoria === categoria);
}

export function totalEjercicios(): number {
  return disciplinas.reduce((n, d) => n + d.ejercicios.length, 0);
}