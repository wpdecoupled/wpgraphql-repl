<script lang="ts">
	// import { startPlaygroundWeb, type PlaygroundClient } from '@wp-playground/client';
	// import { wpPlaygroundClientStore } from '$lib/stores';
	import { onMount } from 'svelte';
	// import { setupWPPlayground, wpGraphQLBlueprint } from '$lib/graphiql/WPPlugin';
	import { getWpPlaygroundUrl, playgroundOptionsStore } from './api';
</script>

<iframe
	id="wp"
	src={getWpPlaygroundUrl($playgroundOptionsStore).toString()}
	width="100%"
	height="100%"
	title="WordPress Instance"
/>

<style>
	iframe {
		border: none;
	}
</style>
