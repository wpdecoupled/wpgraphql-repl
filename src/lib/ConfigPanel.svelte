<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	import { Title, Divider, NativeSelect, TextInput } from '@svelteuidev/core';

	import {
		getPHPVersion,
		getWordPressVersion,
		SupportedWordPressVersionsList,
		SupportedPHPVersionsList,
		WP_PLAYGROUND_PHP_VERSION_PARAM,
		WP_PLAYGROUND_WP_VERSION_PARAM,
		getPlaygroundUrl,
		playgroundClient,
	} from '$lib/wordpress-playground';

	import { browser } from '$app/environment';

	let wpVersion = getWordPressVersion($page.url);

	let phpVersion = getPHPVersion($page.url);

	$: workingUrl = getPlaygroundUrl($page.url);

	// @todo - rewrite this component to be abstracted from URL prarams and wrte comon provider for both this and the Playground Window
	$: if (browser) {
		const newUrl = new URL($page.url);
		newUrl.searchParams.set(WP_PLAYGROUND_WP_VERSION_PARAM, wpVersion);
		newUrl.searchParams.set(WP_PLAYGROUND_PHP_VERSION_PARAM, phpVersion);
		// newUrl.searchParams.set(WP_PLAYGROUND_URL_PARAM, workingUrl);

		goto(newUrl, {
			noScroll: true,
			keepFocus: true,
		});
	}
</script>

<div>
	<Title order={2} align="center">WP Settings</Title>
	<Divider />
	<NativeSelect
		bind:value={wpVersion}
		data={SupportedWordPressVersionsList}
		label="WordPress Version"
		description="The version of WordPress to use for the GraphQL API."
		variant="filled"
		on:change()
	/>
	<NativeSelect
		data={SupportedPHPVersionsList}
		bind:value={phpVersion}
		label="PHP Version"
		description="The version of PHP to use with WordPress."
		variant="filled"
	/>
	<TextInput
		label="WordPress URL"
		description="The URL of the WordPress instance to use."
		variant="filled"
		bind:value={workingUrl}
		on:keydown={(e) => {
			e.key === 'Enter' && $playgroundClient.goTo(workingUrl);
		}}
	/>
</div>
