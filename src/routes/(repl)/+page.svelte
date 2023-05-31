<script lang="ts">
	import { Playground } from '$lib/wordpress-playground';
	import PlaygroundSidebar from '$lib/PlaygroundSidebar.svelte';
	import ReplHeader from '$lib/ReplHeader.svelte';
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

		<ReplHeader />
	</header>

	<aside>
		<PlaygroundSidebar />

		<footer>
			<p>
				Brought to you by <a
					href="https://wpdecoupled.dev/?utm_source=wpgraphql-repl&utm_medium=website&utm_campaign=general"
					target="_blank"
					rel="noopener">WP Decoupled</a
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
		grid-template-columns: 400px 1fr;
		grid-template-areas:
			'header header'
			'aside playground'
			'footer footer';
	}

	header {
		grid-area: header;
		display: grid;
		grid-template-columns: min-content 1fr min-content;
		grid-template-rows: 1fr;
		grid-template-areas: 'title name buttons';
		/* justify-content: flex-start; */
		align-items: center;
		gap: 1em;
		width: 100%;
		padding: 0.5em 1em;
		background-color: var(--color-background);
	}
	#playground {
		grid-area: playground;
	}

	aside {
		overflow-y: hidden;
		grid-area: aside;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	footer {
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: var(--color-background);
	}
</style>
