<script lang="ts">
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import { Seo } from '$lib/seo';
	import './layout.css';

	import { ConfigToastProvider } from '$lib/config/components';
	import { PlaygroundProvider } from '$lib/repl/state';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<PlaygroundProvider>
	<ConfigToastProvider />
	<Seo />
	<slot />
	<SvelteToast />
</PlaygroundProvider>

<style>
	:root {
		--toastContainerTop: auto;
		--toastContainerRight: 20px;
		--toastContainerBottom: calc(20px - 0.5rem);
		--toastContainerLeft: auto;

		--toastBackground: var(--color-primary);
		--toastColor: var(--color-background);
		--toastBarBackground: var(--color-highlight);
	}

	@media (max-width: 899px) {
		:root {
			--toastContainerTop: auto;
			--toastContainerLeft: 20px;
			--toastContainerBottom: calc(20px - 0.5rem);
			--toastContainerRight: auto;
		}
	}
</style>
