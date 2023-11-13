<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	import ReplView from '$lib/repl/View.svelte';
	import { replState } from '$lib/repl/state';
	import { queryParamsProvider } from '$lib/storage/browser';

	// $: ({ name, wpUrl, wpVersion, phpVersion } = $replState);

	$: queryParamsProvider.updateStorageFromState($page, $replState);

	if (browser) {
		window.addEventListener('message', (message) => {
			if (message?.data?.type === 'relay' && message?.data?.name === 'graphiql-context') {
				const { query, variables } = message?.data?.data;
				console.log('You have a relay: ', message?.data?.data);
			}
		});
	}
</script>

<ReplView />
