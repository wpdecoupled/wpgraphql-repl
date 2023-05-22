<script lang="ts">
	import { browser } from '$app/environment';

	import { SvelteUIProvider, TypographyProvider, Seo } from '@svelteuidev/core';
	import { replState, wpUrl } from '$lib/wordpress-playground';

	$: if (browser) {
		history.pushState({}, '', $replState);
	}

</script>

<Seo title={$wpUrl} titleTemplate="%t% | WPGraphQL REPL" />
<SvelteUIProvider withNormalizeCSS withGlobalStyles>
	<TypographyProvider>
		<slot />
	</TypographyProvider>
</SvelteUIProvider>
