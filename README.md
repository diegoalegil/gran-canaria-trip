# 🏁 Cumple en Gran Canaria · web-app

Itinerario interactivo del finde de cumpleaños (19-21 junio 2026), instalable como app en el móvil.

## Archivos
- `index.html` — la app (todo el contenido y diseño)
- `manifest.json` — datos de la PWA (nombre, iconos, colores)
- `sw.js` — service worker (funciona sin conexión)
- `icons/` — iconos de la app

## Cómo subirla a GitHub Pages (gratis, 5 min)

1. Entra en **github.com** → botón **New** → crea un repo, por ejemplo `gran-canaria-trip` (público).
2. En el repo: **Add file → Upload files**. Arrastra **todos** estos archivos **y la carpeta `icons/`**. Commit.
3. **Settings → Pages**. En *Source* elige **Deploy from a branch**, rama **main**, carpeta **/(root)**. Guarda.
4. Espera ~1 min y recarga: te dará la URL pública, tipo
   `https://TU-USUARIO.github.io/gran-canaria-trip/`

## Instalarla como app en el iPhone
1. Abre esa URL en **Safari**.
2. Toca **Compartir** (el cuadro con la flecha ▵).
3. **Añadir a pantalla de inicio**.
4. Ya tienes el icono en el móvil, a pantalla completa. 🎉

> En Android/Chrome aparece sola la opción "Instalar app".

## Probar en el ordenador
Abre `index.html` en el navegador. (La instalación como app y el modo offline solo funcionan sobre HTTPS, es decir, una vez subida a GitHub Pages.)
