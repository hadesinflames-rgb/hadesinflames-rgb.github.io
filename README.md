# Hades in Flames 🔥

Blog estático sobre música, creado como **Actividad 1 (Laboratorio: creación de un blog)** de la asignatura *Desarrollo de Aplicaciones en Red* del Grado en Ingeniería Informática (UNIR).

**Web publicada:** https://hadesinflames-rgb.github.io

## Tecnologías

- **HTML5** y **CSS3** escritos a mano, sin frameworks ni temas prefabricados
- **Jekyll 4** como generador de sitios estáticos (plantillas con Liquid)
- **Markdown** para el contenido de las entradas
- **GitHub Pages** para el alojamiento y la publicación automática

## Estructura del proyecto

```
├── _config.yml          # Configuración general del sitio
├── _data/
│   └── navegacion.yml   # Enlaces del menú principal
├── _includes/           # Fragmentos reutilizables
│   ├── header.html      # Cabecera y menú
│   ├── footer.html      # Pie de página
│   └── post-nav.html    # Enlaces anterior / siguiente
├── _layouts/            # Plantillas
│   ├── default.html     # Plantilla base de todas las páginas
│   └── post.html        # Plantilla de las entradas
├── _posts/              # Entradas del blog en Markdown
├── assets/
│   ├── css/             # Hojas de estilo
│   └── img/             # Imágenes y favicon
├── index.html           # Portada con el listado de entradas
├── archivo.html         # Archivo de entradas por año
├── sobre-mi.md          # Página "Sobre mí"
└── 404.html             # Página de error personalizada
```

## Ejecutar en local

Requisitos: Ruby (con DevKit en Windows) y Bundler.

```bash
bundle install
bundle exec jekyll serve --livereload
```

Después, abrir http://localhost:4000

## Publicación

Cada `git push` a la rama `main` hace que GitHub Pages regenere y publique el sitio automáticamente.

## Créditos de las imágenes

Las imágenes proceden de bancos de imágenes libres (Unsplash, Wikimedia Commons). El autor y la licencia de cada una se indican al pie de la imagen en su entrada.
