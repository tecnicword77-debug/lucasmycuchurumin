// =============================================================================
// config.js — Datos editables de Technical World
// Si necesitás cambiar el WhatsApp, el Sheets o un ícono, es ACÁ.
// =============================================================================
const CONFIG = {
  // Pegá acá la URL que te da Apps Script al implementar (termina en /exec).
  // Ver apps-script-code.gs para las instrucciones de instalación.
  API_URL:         'https://script.google.com/macros/s/AKfycbxdCIsl1D7b21fvCVzYpmcbxXsIjw1JV_NUd4cqW4ivKU9w-AoCkL5gntO1_Dj6qvFp/exec',
  WA_NUMBER:       '5493454928734',
  IG_USER:         'technical_world099',

  COL_NOMBRE:      'nombre',
  COL_PRECIO:      'precio',
  COL_CATEGORIA:   'categoria',
  COL_DESCRIPCION: 'descripcion',
  COL_IMAGEN:      'imagen',
  COL_IMAGEN2:     'imagen2',
  COL_IMAGEN3:     'imagen3',
  COL_IMAGEN4:     'imagen4',
  COL_BADGE:       'badge',
  COL_DISPONIBLE:  'disponible',
  COL_OFERTA:      'oferta', // Precio de oferta — si tiene valor, muestra precio tachado + precio oferta

  // Íconos por categoría. Si la categoría no está acá usa 'default'.
  // Para agregar una nueva simplemente escribís: 'NombreCategoria': '🔥',
  ICONOS: {
    'Auriculares': '🎧',
    'Parlantes':   '🔊',
    'Cargadores':  '⚡',
    'Pendrives':   '💾',
    'Periféricos': '🖱️',
    'Celulares':   '📱',
    'Cables':      '🔌',
    'Teclados':    '⌨️',
    'Mouses':      '🖱️',
    'Tablets':     '📱',
    'Herramientas': '🛠️',
    'default':     '📦',
  }
};
