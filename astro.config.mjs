// @ts-check
import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://www.varranz.com',
  devToolbar: { enabled: false },
  redirects: {
    '/carta.html': '/carta/',
    '/restaurante.html': '/restaurante/',
    '/contacto.html': '/contacto/',
  },
});
