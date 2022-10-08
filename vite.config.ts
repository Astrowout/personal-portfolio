import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		port: 9000
	},
	build: {
		rollupOptions: {
			external: [
				"website-carbon-badges/b.min"
			]
		}
	}
};

export default config;
