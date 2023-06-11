<script lang="ts">
	import extend from "just-extend";
	import PlaygroundWindow from './PlaygroundWindow.svelte';
  import { getKey } from './stores/actions';
	import { PLAYGROUND_WP_DEFAULT, PLAYGROUND_PHP_DEFAULT, PLAYGROUND_URL_DEFAULT } from  './consts'
	import type { SupportedWordPressVersions, SupportedPHPVersions } from './types';

	// export let config: Partial<PlaygroundConfig>;

	export let wpVersion: SupportedWordPressVersions = PLAYGROUND_WP_DEFAULT;
	export let phpVersion: SupportedPHPVersions = PLAYGROUND_PHP_DEFAULT;
	export let wpUrl: string = PLAYGROUND_URL_DEFAULT;
	// const {
	// 		initUrl,
	// 		stackVersions: { wp, php },
	// } = extend(
	// 	PLAYGROUND_CONFIG_DEFAULT,
	// 	config
	// ) as PlaygroundConfig

	$: key = getKey(wpVersion, phpVersion)
</script>

{#key key}
	<PlaygroundWindow
		playgroundOptions={{
			landingPage: wpUrl,
			preferredVersions: {
				wp: wpVersion,
				php: phpVersion,
			},
		}}
	/>
{/key}
