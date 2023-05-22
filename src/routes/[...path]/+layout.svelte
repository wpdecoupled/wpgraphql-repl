<script lang="ts">
	import { SvelteUIProvider, TypographyProvider, Seo } from '@svelteuidev/core';
	import { wpUrl } from '$lib/wordpress-playground';
	import { browser } from '$app/environment';

	$: if (browser) {
		history.pushState({}, '', $wpUrl	);
	}

</script>

<Seo title={$wpUrl} titleTemplate="%t% | WPGraphQL REPL" />
<SvelteUIProvider withNormalizeCSS withGlobalStyles>
	<TypographyProvider>
		<slot />
	</TypographyProvider>
</SvelteUIProvider>
