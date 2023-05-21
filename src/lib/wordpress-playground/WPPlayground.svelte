<script lang="ts">
	import { startPlaygroundWeb, type PlaygroundClient } from '@wp-playground/client';
	import { wpPlaygroundClientStore } from '$lib/stores';
	import { onMount } from 'svelte';
	import { setupWPPlayground, wpGraphQLBlueprint } from '$lib/graphiql/WPPlugin';

	let wpRef: HTMLIFrameElement;

	onMount(async () => {
		const client = await startPlaygroundWeb({
			iframe: wpRef,
			remoteUrl: 'https://playground.wordpress.net/remote.html',
			blueprint: wpGraphQLBlueprint,
		});

		await client.isReady();

		await setupWPPlayground(client);

		wpPlaygroundClientStore.set(client);
	});
</script>

<iframe id="wp" bind:this={wpRef} width="100%" height="100%" title="WordPress Instance" />
