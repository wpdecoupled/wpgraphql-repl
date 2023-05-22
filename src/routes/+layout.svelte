<script lang="ts">
	import { SvelteUIProvider, TypographyProvider, Seo } from '@svelteuidev/core';
</script>

<Seo
    title='Home'
    titleTemplate="%t% | WPGraphQL REPL"
 />
<SvelteUIProvider withNormalizeCSS withGlobalStyles>
	<TypographyProvider>
		<slot />
	</TypographyProvider>
</SvelteUIProvider>
