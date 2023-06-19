<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import PlaygroundWindow from './PlaygroundWindow.svelte';
  import { getKey } from './stores/actions';
	import { PLAYGROUND_WP_DEFAULT, PLAYGROUND_PHP_DEFAULT, PLAYGROUND_URL_DEFAULT } from  './consts'
	import type { SupportedWordPressVersions, SupportedPHPVersions } from './types';
	import { wpUrl, client } from './stores'

	// export let config: Partial<PlaygroundConfig>;

const dispatch = createEventDispatcher();


	export let wpVersion: SupportedWordPressVersions = PLAYGROUND_WP_DEFAULT;
	export let phpVersion: SupportedPHPVersions = PLAYGROUND_PHP_DEFAULT;
	export let initialUrl: string = PLAYGROUND_URL_DEFAULT;
	export let debug: boolean = false;

	$: if (debug) {
		console.log("new playground url: ", $wpUrl)
		console.log("new client", $client)
	}

	$: dispatch('newUrl', $wpUrl)

	$: key = getKey(wpVersion, phpVersion)
</script>

{#key key}
	<PlaygroundWindow
		playgroundOptions={{
			landingPage: initialUrl,
			preferredVersions: {
				wp: wpVersion,
				php: phpVersion,
			},
		}}
	/>
{/key}
