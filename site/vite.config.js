import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { cwd } from 'node:process';

import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import fs from 'node:fs';

const pkg = JSON.parse(readFileSync(join(cwd(), 'package.json')));

export default defineConfig({
	plugins: [sentrySvelteKit(), sveltekit(), rawFonts(['.ttf'])],
	assetsInclude: ['**/*.php'],
	ssr: {
		noExternal: Object.keys(pkg.dependencies || {})
	},
	resolve: {
		build: {
			sourcemap: true
		},
	},
});

function rawFonts(ext) {
	return {
		name: 'vite-plugin-raw-fonts',
		transform(code, id) {
			if (ext.some((e) => id.endsWith(e))) {
				const buffer = fs.readFileSync(id);
				return { code: `export default ${JSON.stringify(buffer)}`, map: null };
			}
		},
	};
}
