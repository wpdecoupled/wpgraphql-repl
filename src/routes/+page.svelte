<script lang="ts">
	import { PlaygroundConfig } from '$lib/wordpress-playground';
	import { Playground } from '$lib/wordpress-playground';
	import ReplSettings from '$lib/ReplSettings.svelte';
</script>

<main>
	<header>
		<h1>
			<img
				id="wpgraphql-logo"
				src="/logo-wpgraphql.svg"
				title="WP GraphQL"
				alt="WP GraphQL Logo"
				height="32px"
				width="32px"
			/><span id="repl">REPL</span><span id="beta-tag">Beta</span>
		</h1>

		<ReplSettings />
	</header>

	<aside>
		<PlaygroundConfig />

		<footer>
			<p>
				Brought to you by <a href="https://wpdecoupled.dev" target="_blank" rel="noopener"
					>WP Decoupled</a
				>
			</p>
		</footer>
	</aside>

	<section id="playground">
		<Playground />
	</section>
</main>

<style>
	main {
		height: 100vh;
		overflow: hidden;
		box-sizing: content-box;
		display: grid;
		grid-template-rows: min-content auto min-content;
		grid-template-columns: 300px 1fr;
		grid-template-areas:
			'header header'
			'aside playground'
			'footer footer';
	}

	header {
		grid-area: header;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 0.5em;
		background-color: var(--color-background);
	}

	#playground {
		grid-area: playground;
	}

	aside {
		grid-area: aside;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow-y:auto;
		scroll-behavior: smooth;
	}

	footer {
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: var(--color-background);
	}

	h1 {
		font-size: 24px;
		margin: 0.25em;
	}

	#repl {
		vertical-align: middle;
	}
	#wpgraphql-logo {
		aspect-ratio: 1 / 1;
		margin: 0;
		vertical-align: middle;
	}

	#beta-tag {
		font-size: 0.3em;
		text-transform: uppercase;
		padding: 0.2em;
		border: 1px solid var(--color-highlight);
		border-radius: 1em;
		vertical-align: super;
	}
</style>
