<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	import { SvelteToast } from '@zerodevx/svelte-toast';

	import Seo from '$lib/Seo.svelte';
	import './layout.css';

	import { ConfigToastProvider } from '$lib/config';
	import { SearchParamsStorageProvider, PlaygroundProvider } from '$lib/wordpress-playground';

	import type { LayoutData } from './$types';

	const options = {
		initial: 0,
		next: 1,
	};

	export let data: LayoutData;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});
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
