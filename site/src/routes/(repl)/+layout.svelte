<script lang="ts">
	import { error } from '@sveltejs/kit';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import { inject } from '@vercel/analytics';

	import { page } from '$app/stores';
	import { dev } from '$app/environment';
	import { repl_state } from '$lib/repl/state';

	import { Seo } from '$lib/seo';
	import { ConfigToastProvider } from '$lib/config/components';

	import './layout.css';

	inject({ mode: dev ? 'development' : 'production' });

	$: if ($page.data?.state) {
		repl_state.dispatch({
			type: 'load_state',
			value: $page.data?.state,
		});
	} else {
		error(500, 'No state found in page data');
	}
</script>

<ConfigToastProvider />
<Seo />
<slot />
<SvelteToast />

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
