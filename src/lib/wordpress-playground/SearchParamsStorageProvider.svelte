<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	import {
		getPlaygroundContext,
		PLAYGROUND_WP_VERSION_PARAM,
		PLAYGROUND_PHP_VERSION_PARAM,
		PLAYGROUND_URL_PARAM,
		REPL_NAME_PARAM,
	} from '$lib/wordpress-playground';

	const {
		config: {
			wpUrl,
			name,
			stackVersions: { wp, php },
		},
	} = getPlaygroundContext();

	// Only use if you want these values to change history
	$: {
		if (browser) {
			const newUrl = new URL($page.url);

			newUrl.searchParams.set(PLAYGROUND_WP_VERSION_PARAM, $wp);
			newUrl.searchParams.set(PLAYGROUND_PHP_VERSION_PARAM, $php);
			newUrl.searchParams.set(PLAYGROUND_URL_PARAM, $wpUrl);

			goto(newUrl, {
				noScroll: true,
				keepFocus: true,
			});
		}
	}

	// Similar code expet it doesn't add a History entry
	$: if (browser) {
		const newUrl = new URL($page.url);

		newUrl.searchParams.set(REPL_NAME_PARAM, $name);

		goto(newUrl, {
			noScroll: true,
			keepFocus: true,
			replaceState: true,
		});
	}
</script>
