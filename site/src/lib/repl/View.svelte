<script lang="ts">
	import { Playground, type PlaygroundClient } from 'wpgraphql-playground';
	import { repl_state, createGraphiQLUrl } from '$lib/repl/state';
	import PlaygroundSidebarConfig from '$lib/config/SidebarView.svelte';
	import { Header, Footer } from '$lib/control/panels';
	import ReplMobileMenu from '$lib/control/FloatingMenu.svelte';
	import PlaygroundMobileConfig from '$lib/config/DialogView.svelte';

	$: ({ url, wp, php } = $repl_state);

	function handleNewUrl(event: CustomEvent<string>) {
		repl_state.dispatch({
			type: 'set-url',
			value: event.detail,
		});
	}

	function handleNewClient(event: CustomEvent<PlaygroundClient>) {
		repl_state.dispatch({
			type: 'set-client',
			value: event.detail,
		});
	}

	function handleNewGraphiQLContext(event: CustomEvent<{ query: string; variables: string }>) {
		repl_state.dispatch({
			type: 'set-graphiql-context',
			value: event.detail,
		});
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
		<Playground
			on:newGraphiQLContext={handleNewGraphiQLContext}
			on:newUrl={handleNewUrl}
			on:newClient={handleNewClient}
			wpVersion={wp}
			phpVersion={php}
			initialUrl={createGraphiQLUrl($repl_state)}
		/>
				<!-- @TODO: Fix Line 58 so we don't have to rememer to provess the URL special like-->

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
