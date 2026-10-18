# V. Arranz

Rediseño del restaurante en Astro. Diseño editorial en crema y burdeos, fotografías originales optimizadas a WebP y tipografías servidas localmente.

## Desarrollo

Requiere Node.js 22.22 o posterior.

```sh
npm install
npm run dev -- --background
npm run astro -- dev status
npm run astro -- dev stop
```

El comando de inicio muestra la dirección local y el puerto disponible.

```sh
npm run build
npm run preview
```

La web estática se genera en `dist/`.

## Contenido

- `src/pages/index.astro`: portada, restaurante, celebraciones y contacto.
- `src/pages/restaurante.astro`: historia, cocina, ambiente y exposiciones de arte.
- `src/pages/contacto.astro`: contacto, reservas, horarios y mapa interactivo.
- `src/pages/carta.astro`: carta completa, con navegación por categorías.
- `src/data/restaurant.ts`: contacto, platos y precios base.
- `src/layouts/Layout.astro`: metadatos y datos estructurados Restaurant.
- `src/styles/global.css`: diseño y adaptación a móvil.
- `src/assets/`: fotografías originales seleccionadas de `old`.
- `public/fonts/`: fuentes locales y licencias.

La reserva se realiza por teléfono. El enlace de ubicación abre Google Maps. El mapa integrado utiliza Google Maps. Las reservas se realizan por teléfono.

## Fuentes y revisión de contenido

Datos contrastados el 19 de octubre de 2026 con:

- https://www.varranz.com/restaurante.html
- https://www.varranz.com/contacto.html
- https://www.varranz.com/carta.html

La carta publicada indica que sus precios no incluyen el 10 % de IVA. Se conservan esos precios base en los datos y se calcula el precio final en pantalla con `priceWithVat`. Conviene confirmar la vigencia de platos, precios y horarios con el restaurante antes de publicar.

Horario: miércoles a sábado, 12:00–23:45; domingo, 12:00–18:00. Lunes y martes cerrado. Se ha usado el horario actual, no el de la carpeta antigua.

## Publicación

Subir `dist/` a un alojamiento estático. Las rutas antiguas `.html` cuentan con redirecciones estáticas generadas por Astro. El alojamiento debe servir el `index.html` de los directorios y su página `404.html`; si admite redirecciones HTTP, configurar también las rutas antiguas a `/carta/`, `/restaurante/` y `/contacto/`.

El dominio canónico, Open Graph, `robots.txt` y `sitemap.xml` están preparados para `https://www.varranz.com`. No se ha modificado la web en producción.

## Imágenes para compartir e iconos

Cada página tiene su propia portada de 1200 × 630 en `public/og/`: `inicio.jpg`, `restaurante.jpg`, `carta.jpg` y `contacto.jpg`. La asignación y los textos alternativos están en `src/data/seo.ts`. El layout incluye Open Graph y X Cards completos, con URL absoluta, dimensiones y tipo de imagen.

Los originales se generaron con la herramienta integrada ImageGen, usando las fotografías existentes como referencia. Se guardan en `design/og/`, junto con los prompts y la corrección final del texto de contacto. Estas composiciones se usan para compartir enlaces; las fotografías de las páginas mantienen sus originales.

Los iconos PNG, ICO y Apple Touch derivan de `public/favicon.svg`. `site.webmanifest` define los iconos de 192 y 512 píxeles, con apertura en navegador.

Para volver a exportar las imágenes aprobadas y los iconos:

```sh
npm run assets:generate
```

Los recursos están listos para su despliegue. Las plataformas externas solo podrán leer las nuevas tarjetas cuando se publique esta versión en el dominio canónico.
