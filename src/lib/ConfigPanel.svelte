<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	import { Title, Divider, NativeSelect } from '@svelteuidev/core';

	import {
		getPHPVersion,
		getWordPressVersion,
		SupportedWordPressVersionsList,
		SupportedPHPVersionsList,
		WP_PLAYGROUND_PHP_VERSION_PARAM,
		WP_PLAYGROUND_WP_VERSION_PARAM,
	} from '$lib/wordpress-playground';
	import { browser } from '$app/environment';

	let wpVersion = getWordPressVersion($page.url);

	let phpVersion = getPHPVersion($page.url);

	$: if (browser) {
		/**
		 * WARNING: Mutating the URL object directly will not trigger a reactivity update
		 * We want these parameters to trigger a render, so we need to create a new URL object
		 */
		const newUrl = new URL($page.url);
		newUrl.searchParams.set(WP_PLAYGROUND_WP_VERSION_PARAM, wpVersion);
		newUrl.searchParams.set(WP_PLAYGROUND_PHP_VERSION_PARAM, phpVersion);

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
		variant="unstyled"
		on:change()
	/>
	<NativeSelect
		data={SupportedPHPVersionsList}
		bind:value={phpVersion}
		label="PHP Version"
		description="The version of PHP to use with WordPress."
		variant="unstyled"
	/>
</div>
