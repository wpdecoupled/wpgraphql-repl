<script lang="ts">
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import Seo from '$lib/Seo.svelte';
	import './layout.css';

	import { ConfigToastProvider } from '$lib/config';
	import { SearchParamsStorageProvider, PlaygroundProvider } from '$lib/wordpress-playground';

	const options = {
		initial: 0,
		next: 1,
	};
</script>

<PlaygroundProvider>
	<SearchParamsStorageProvider />
	<ConfigToastProvider />
	<Seo />
	<slot />
	<SvelteToast {options} />
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
