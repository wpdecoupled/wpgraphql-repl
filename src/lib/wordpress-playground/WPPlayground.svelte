<script lang="ts">
	import { page } from '$app/stores';

	import {
		getWordPressVersion,
		getPHPVersion,
		getPlaygroundUrl,
		generatePlaygroundKey,
	} from '$lib/wordpress-playground';

	import PlaygroundWindow from './PlaygroundWindow.svelte';

	$: workingWpVersion = getWordPressVersion($page.url);
	$: workingPhpVersion = getPHPVersion($page.url);
	$: workingUrl = getPlaygroundUrl($page.url);
	$: playgroundKey = generatePlaygroundKey($page.url);
</script>

{#key playgroundKey}
	<PlaygroundWindow
		playgroundOptions={{
			landingPage: workingUrl,
			preferredVersions: {
				wp: workingWpVersion,
				php: workingPhpVersion,
			},
		}}
	/>
{/key}
