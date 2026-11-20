/* =========================================================
   Hades in Flames · Interactividad del blog
   1. Botón de modo claro / oscuro
   2. Visor para ampliar las imágenes de las entradas
   ========================================================= */

/* ---------- 1. Modo claro / oscuro ---------- */
const botonTema = document.querySelector('#tema-toggle');

// Pone o quita la clase "tema-claro" en <html> y actualiza el botón
function aplicarTema(claro) {
  document.documentElement.classList.toggle('tema-claro', claro);
  botonTema.textContent = claro ? '☾' : '☀';
  botonTema.setAttribute('aria-label', claro ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro');
}

if (botonTema) {
  // Al cargar, el botón refleja el tema que ya está aplicado
  aplicarTema(document.documentElement.classList.contains('tema-claro'));

  // Al hacer clic, cambia al tema contrario y lo recuerda
  botonTema.addEventListener('click', function () {
    const claro = !document.documentElement.classList.contains('tema-claro');
    aplicarTema(claro);
    try {
      localStorage.setItem('tema', claro ? 'claro' : 'oscuro');
    } catch (error) {
      // Si el navegador no permite guardar, el cambio funciona igual en esta página
    }
  });
}

/* ---------- 2. Ampliar imágenes ---------- */
const imagenes = document.querySelectorAll('.entrada__imagen img');

if (imagenes.length > 0) {
  // Creamos el visor una sola vez y lo añadimos al final del <body>
  const visor = document.createElement('div');
  visor.className = 'visor';
  visor.setAttribute('role', 'dialog');
  visor.setAttribute('aria-modal', 'true');
  visor.setAttribute('aria-label', 'Imagen ampliada');
  visor.innerHTML =
    '<button class="visor__cerrar" type="button" aria-label="Cerrar">×</button>' +
    '<img class="visor__imagen" alt="">';
  document.body.appendChild(visor);

  const imagenGrande = visor.querySelector('.visor__imagen');

  function abrirVisor(img) {
    imagenGrande.src = img.src;
    imagenGrande.alt = img.alt;
    visor.classList.add('visor--abierto');
  }

  function cerrarVisor() {
    visor.classList.remove('visor--abierto');
  }

  // Cada imagen se puede abrir con clic o con Enter (teclado)
  imagenes.forEach(function (img) {
    img.classList.add('ampliable');
    img.tabIndex = 0;
    img.addEventListener('click', function () { abrirVisor(img); });
    img.addEventListener('keydown', function (evento) {
      if (evento.key === 'Enter') abrirVisor(img);
    });
  });

  // Se cierra al hacer clic en cualquier parte o al pulsar Escape
  visor.addEventListener('click', cerrarVisor);
  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape') cerrarVisor();
  });
}
