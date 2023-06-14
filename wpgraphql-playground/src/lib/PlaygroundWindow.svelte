<script lang="ts">
	import { onMount } from 'svelte';
	import { startPlaygroundWeb, type PlaygroundClient } from '@wp-playground/client';

	import { wpUrl } from './stores/index';
	import { PLAYGROUND_REMOTE_API } from './consts';
	import { makeWpGraphQLBlueprint } from './blueprint';
	import { setClient, setWpUrl } from './stores/actions';

	export let playgroundOptions: Parameters<typeof makeWpGraphQLBlueprint>[0];

	let wppFrame: HTMLIFrameElement;

	onMount(() => {
		const blueprint = makeWpGraphQLBlueprint(playgroundOptions);

		const setupPlayground = async () => {
			const client: PlaygroundClient = await startPlaygroundWeb({
				iframe: wppFrame,
				remoteUrl: PLAYGROUND_REMOTE_API,
				blueprint
			});

			setClient(client);

			client.onNavigation((url: string) => {
				if (url !== $wpUrl) {
					setWpUrl(url);
				}
			});
		};

		setupPlayground();

		return () => {
			setClient(null);
		};
	});
</script>

<iframe
	bind:this={wppFrame}
	id="wp"
	width="100%"
	height="100%"
	title="WPGraphQL Playground Instance"
/>

<style>
	iframe {
		border: none;
	}
</style>
