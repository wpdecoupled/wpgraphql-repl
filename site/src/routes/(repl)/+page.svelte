<script lang="ts">
	import { page } from '$app/stores';

	import ReplView from '$lib/repl/View.svelte';
	import { replState } from '$lib/repl/state';
	import { queryParamsProvider } from '$lib/storage/browser';

	// $: ({ name, wpUrl, wpVersion, phpVersion } = $replState);

	$: queryParamsProvider.updateStorageFromState($page, $replState);
</script>

<ReplView />
