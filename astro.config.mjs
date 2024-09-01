import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	server: {
		port: 3000,
		open: true,
	},
	site: 'https://astro-blog-poc.netlify.app'
});
