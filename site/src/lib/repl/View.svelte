<script lang="ts">
	import { Playground } from 'wpgraphql-playground';
	import { getPlaygroundContext } from '$lib/repl/state';
	import PlaygroundSidebarConfig from '$lib/config/SidebarView.svelte';
	import { Header, Footer } from '$lib/control/panels';
	import ReplMobileMenu from '$lib/control/FloatingMenu.svelte';
	import PlaygroundMobileConfig from '$lib/config/DialogView.svelte';

	const {
		// client,
		config: {
			wpUrl,
			stackVersions: { wp, php },
		},
	} = getPlaygroundContext();

	function handleNewUrl(event: CustomEvent<string>) {
		$wpUrl = event.detail;
	}

</script>

<main>
	<header>
		<img
			id="wpgraphql-logo"
			src="/logo-wpgraphql.svg"
			title="WP GraphQL"
			alt="WP GraphQL Logo"
			height="48px"
			width="48px"
		/>

		<Header />
	</header>

	<PlaygroundSidebarConfig>
		<Footer />
	</PlaygroundSidebarConfig>

	<section id="playground">
		<Playground on:newUrl={handleNewUrl} wpVersion={$wp} phpVersion={$php} initialUrl={$wpUrl} />
	</section>
</main>
<PlaygroundMobileConfig />
<ReplMobileMenu />

<style>
	main {
		height: 100vh;
		overflow: hidden;
		box-sizing: content-box;
		display: grid;
		grid-template-rows: min-content auto;
		grid-template-columns: min-content 1fr;
		grid-template-areas:
			'header header'
			'aside playground';
	}

	header {
		grid-area: header;
		display: grid;
		grid-template-columns: min-content 1fr min-content;
		grid-template-rows: 1fr;
		grid-template-areas: 'title name buttons';
		align-items: center;
		gap: 1em;
		width: 100%;
		padding: 6px;
		background-color: var(--color-background);
	}

	#playground {
		grid-area: playground;
	}

	@media (max-width: 899px) {
		header {
			grid-template-columns: min-content 1fr;

			grid-template-areas: 'title name';
		}

		main {
			grid-template-areas:
				'header header'
				'playground playground';
		}
	}
</style>
