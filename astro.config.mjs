// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()]
	},

	integrations: [icon(), alpinejs({ entrypoint: '/src/entrypoint.alpinejs.ts' })],

	site: 'https://smntct.org'
});
