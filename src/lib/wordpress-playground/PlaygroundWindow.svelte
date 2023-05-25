<script lang="ts">
	import { onMount } from 'svelte';
	import { startPlaygroundWeb, type PlaygroundClient } from '@wp-playground/client';

	import {
		getPlaygroundContext,
		makeWpGraphQLBlueprint,
		PLAYGROUND_REMOTE_API,
	} from '$lib/wordpress-playground';

	export let playgroundOptions: Parameters<typeof makeWpGraphQLBlueprint>[0];

	let wppFrame: HTMLIFrameElement;

	const {
		client: clientStore,
		config: { wpUrl },
	} = getPlaygroundContext();

	onMount(() => {
		const blueprint = makeWpGraphQLBlueprint(playgroundOptions);

		const setupPlayground = async () => {
			const client: PlaygroundClient = await startPlaygroundWeb({
				iframe: wppFrame,
				remoteUrl: PLAYGROUND_REMOTE_API,
				blueprint,
			});

			await client.isReady();

			clientStore.set(client);

			client.onNavigation((url: string) => {
				if (url !== $wpUrl) {
					$wpUrl = url;
				}
			});
		};

		setupPlayground();

		return () => {
			clientStore.set(null);
		};
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
