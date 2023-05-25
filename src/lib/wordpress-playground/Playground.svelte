<script lang="ts">
	import { getPlaygroundContext } from '$lib/wordpress-playground';

	import PlaygroundWindow from './PlaygroundWindow.svelte';
	const {
		key,
		config: {
			wpUrl,
			stackVersions: { wp, php },
		},
	} = getPlaygroundContext();
</script>

{#key $key}
	<PlaygroundWindow
		playgroundOptions={{
			landingPage: $wpUrl,
			preferredVersions: {
				wp: $wp,
				php: $php,
			},
		}}
	/>
{/key}
