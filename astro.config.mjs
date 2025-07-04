// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import alpinejs from "@astrojs/alpinejs";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon(), alpinejs({ entrypoint: "/src/entrypoints/alpine" })],
  adapter: netlify(),
});