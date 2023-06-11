<script lang="ts">
	import { page } from '$app/stores';

	import { getPlaygroundContext } from '$lib/repl/state';

	const {
		config: { name },
	} = getPlaygroundContext();

	$: title = `${$name} • REPL • WPGraphQL`;
	const description = `A REPL for WPGraphQL from the comfort of your browser`;
	const image = new URL(`/og`, $page.url);
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>{title}</title>
	<meta name="description" content="A REPL for WPGraphQL from the comfort of your browser" />
	<meta name="robots" content="index, follow" />
	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={$page.url.toString()} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image.toString()} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={$page.url.host} />
	<meta property="twitter:url" content={$page.url.toString()} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image.toString()} />
</svelte:head>
