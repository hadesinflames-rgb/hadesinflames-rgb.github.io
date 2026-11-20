# Hades in Flames 🔥

Blog estático sobre música, creado como **Actividad 1 (Laboratorio: creación de un blog)** de la asignatura *Desarrollo de Aplicaciones en Red* del Grado en Ingeniería Informática (UNIR).

**Web publicada:** https://hadesinflames-rgb.github.io

## Tecnologías

- **HTML5** semántico y **CSS3** escritos a mano, sin frameworks ni temas prefabricados
- **JavaScript nativo** para la interactividad (sin librerías)
- **Jekyll** como generador de sitios estáticos durante el desarrollo
- **GitHub Pages** para el alojamiento

## Qué contiene este repositorio

Este repositorio contiene el **código final** del blog, es decir, el HTML, CSS y JavaScript que interpreta el navegador. Las plantillas y las entradas en Markdown que usa Jekyll para generarlo se mantienen en una carpeta de trabajo aparte.

```
├── index.html            # Portada con el listado de entradas
├── archivo/              # Archivo de entradas por año
├── sobre-mi/             # Página "Sobre mí"
├── 2026/11/…             # Las entradas del blog
├── 404.html              # Página de error personalizada
└── assets/
    ├── css/
    │   ├── style.css     # Estilos principales
    │   └── extra.css     # Archivo, navegación, 404, modo claro y visor
    ├── js/
    │   └── main.js       # Modo claro/oscuro y visor de imágenes
    └── img/              # Imágenes y favicon
```

El archivo `.nojekyll` indica a GitHub Pages que publique los archivos tal cual, sin procesarlos.

## Funcionalidades

- Portada con tarjetas y rejilla adaptable (CSS Grid)
- Menú de navegación con la página activa marcada
- Enlaces "anterior / siguiente" entre entradas y archivo por fechas
- Diseño adaptable a móvil (responsive)
- **Modo claro / oscuro** con un botón (JavaScript)
- **Visor para ampliar las imágenes** de las entradas (JavaScript)
- Página 404 personalizada

## Créditos de las imágenes

Las fotografías proceden de Unsplash, banco de imágenes de uso libre.
