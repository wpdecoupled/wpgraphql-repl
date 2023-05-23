<script lang="ts">
	import { SvelteUIProvider, TypographyProvider, Seo } from '@svelteuidev/core';
</script>

<Seo title="Playground" titleTemplate="%t% | WPGraphQL REPL" />
<SvelteUIProvider withNormalizeCSS withGlobalStyles>
	<TypographyProvider>
		<slot />
	</TypographyProvider>
</SvelteUIProvider>
