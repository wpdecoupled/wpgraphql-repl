<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	import { startPlaygroundWeb, type PlaygroundClient } from '@wp-playground/client';

	import {
		makeWpGraphQLBlueprint,
		WP_PLAYGROUND_REMOTE_API,
		playgroundClient,
		WP_PLAYGROUND_URL_PARAM,
	} from '$lib/wordpress-playground';

	export let playgroundOptions: Parameters<typeof makeWpGraphQLBlueprint>[0];

	let wppFrame: HTMLIFrameElement;

	onMount(() => {
		const blueprint = makeWpGraphQLBlueprint(playgroundOptions);

		const setupPlayground = async () => {
			const client: PlaygroundClient = await startPlaygroundWeb({
				iframe: wppFrame,
				remoteUrl: WP_PLAYGROUND_REMOTE_API,
				blueprint,
			});

			await client.isReady();

			playgroundClient.set(client);

			client.onNavigation((url: string) => {
				const newUrl = new URL($page.url);
				newUrl.searchParams.set(WP_PLAYGROUND_URL_PARAM, url);

				goto(newUrl, {
					noScroll: true,
					keepFocus: true,
				});
			});
		};

		setupPlayground();

		return () => {
			playgroundClient.set(null);
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
