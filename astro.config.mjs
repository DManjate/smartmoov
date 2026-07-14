// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { passthroughImageService } from 'astro/config';

import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://smartmoov.pt',
  base: '/',
  trailingSlash: 'always',

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
