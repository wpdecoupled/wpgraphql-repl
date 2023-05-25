<script lang="ts">
	import Seo from '$lib/Seo.svelte';
	// import 'normalize.css';
	import './layout.css';

	import { SearchParamsStorageProvider, PlaygroundProvider } from '$lib/wordpress-playground';
</script>

<PlaygroundProvider>
	<SearchParamsStorageProvider />
	<Seo />
	<slot />
</PlaygroundProvider>

<style>
</style>
