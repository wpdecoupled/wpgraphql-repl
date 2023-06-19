<script lang="ts">
	import { SearchParamsStorageProvider } from '$lib/storage/browser/queryParams';
	import ReplView from '$lib/repl/View.svelte';
</script>

<SearchParamsStorageProvider />
<ReplView />
