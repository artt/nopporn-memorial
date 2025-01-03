// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { imageService } from "@unpic/astro/service";

// https://astro.build/config
export default defineConfig({
  site: 'https://noppornsuwanik.netlify.app',
  integrations: [
    tailwind(),
    react(),
  ],
  image: {
    service: imageService(),
  },
});