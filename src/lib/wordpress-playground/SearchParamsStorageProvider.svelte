<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	import {
		getPlaygroundContext,
		PLAYGROUND_WP_VERSION_PARAM,
		PLAYGROUND_PHP_VERSION_PARAM,
		PLAYGROUND_URL_PARAM,
	} from '$lib/wordpress-playground';

	const {
		config: {
			wpUrl,
			stackVersions: { wp, php },
		},
	} = getPlaygroundContext();

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
</script>
