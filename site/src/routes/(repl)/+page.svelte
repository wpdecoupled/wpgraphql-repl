<script lang="ts">
	import { page } from '$app/stores';

	import ReplView from '$lib/repl/View.svelte';
	import { repl_state } from '$lib/repl/state';
	import { queryParamsProvider } from '$lib/storage/browser';

	$: queryParamsProvider.updateStorageFromState($page, $repl_state);
</script>

<ReplView />
