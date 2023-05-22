<script lang="ts">
	import { onMount } from 'svelte';

	import { startPlaygroundWeb, type PlaygroundClient } from '@wp-playground/client';

	import { makeWpGraphQLBlueprint, WP_PLAYGROUND_REMOTE_API } from '$lib/wordpress-playground';
	import { wpUrl, playgroundClient, wpVersion, phpVersion } from '$lib/wordpress-playground';

	let wppFrame: HTMLIFrameElement;

	$: blueprint = makeWpGraphQLBlueprint({
		landingPage: $wpUrl,
		preferredVersions: {
			wp: $wpVersion,
			php: $phpVersion,
		},
	});

	onMount(async () => {
		const client: PlaygroundClient = await startPlaygroundWeb({
			iframe: wppFrame,
			remoteUrl: WP_PLAYGROUND_REMOTE_API,
			blueprint,
		});

		await client.isReady();

		playgroundClient.set(client);

		client.onNavigation((url: string) => {
			wpUrl.set(url);
		});
	});
</script>

<iframe
	bind:this={wppFrame}
	id="wp"
	width="100%"
	height="100%"
	title="WordPress Playground Instance"
/>

<style>
	iframe {
		border: none;
	}
</style>
