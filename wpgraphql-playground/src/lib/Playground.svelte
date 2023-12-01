<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import PlaygroundWindow from './PlaygroundWindow.svelte';
	import { getKey } from './stores/actions';
	import { PLAYGROUND_WP_DEFAULT, PLAYGROUND_PHP_DEFAULT, PLAYGROUND_URL_DEFAULT } from './consts';
	import type { SupportedWordPressVersions, SupportedPHPVersions } from './types';
	import { wpUrl, client } from './stores';
	import { browser } from '$app/environment';

	// export let config: Partial<PlaygroundConfig>;

	const dispatch = createEventDispatcher();

	export let wpVersion: SupportedWordPressVersions = PLAYGROUND_WP_DEFAULT;
	export let phpVersion: SupportedPHPVersions = PLAYGROUND_PHP_DEFAULT;
	export let initialUrl: string = PLAYGROUND_URL_DEFAULT;

	$: dispatch('newUrl', $wpUrl);
	$: dispatch('newClient', $client)


	if (browser) {
		window.addEventListener('message', (message) => {
			if (message?.data?.type === 'relay' && message?.data?.name === 'graphiql-context') {
				const { query, variables } = message?.data?.data

				dispatch('newGraphiQLContext', { query, variables })
			}
		});
	}

	$: key = getKey(wpVersion, phpVersion);
</script>

{#key key}
	<PlaygroundWindow
		playgroundOptions={{
			landingPage: initialUrl,
			preferredVersions: {
				wp: wpVersion,
				php: phpVersion
			}
		}}
	/>
{/key}
