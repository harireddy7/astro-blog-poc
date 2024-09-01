import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  site: 'https://astro-blog-poc.netlify.app',
  integrations: [preact()]
});