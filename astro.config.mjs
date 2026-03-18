import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://astro.build/config
export default defineConfig({
  site: 'https://mattwright.eth.limo',
  output: 'static',
  integrations: [mdx()],
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
  },
});
