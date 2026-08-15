// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import { WEBMAIL_URL } from './src/config.ts';

export default defineConfig({
  site: 'https://smartmoov.pt',
  base: '/',
  trailingSlash: 'always',

  redirects: {
    // O domínio aponta para GitHub Pages, por isso o webmail PTisp
    // (mail.smartmoov.pt/webmail) nunca chegaria ao servidor da PTisp.
    // O URL de destino é definido em src/config.ts (WEBMAIL_URL).
    '/webmail': WEBMAIL_URL,
  },

  build: {
    inlineStylesheets: 'always'
  },

  image: {
    service: passthroughImageService(),
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx()]
});
