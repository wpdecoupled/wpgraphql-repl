<script lang="ts">
	import { AppShell, Aside, Header, Title, Footer } from '@svelteuidev/core';

	import ConfigPanel from '$lib/ConfigPanel.svelte';
	import WpPlayground from '$lib/wordpress-playground';

	// let isDark = false;
	let opened = true;

	// function toggleTheme() {
	// 	isDark = !isDark;
	// }
	// function toggleOpened() {
	// 	opened = !opened;
	// }
</script>

<AppShell fixed navbarOffsetBreakpoint="sm" asideOffsetBreakpoint="sm" padding="0">
	<Header slot="header" height="44">
		<h1><img id="wpgraphql-logo" src="https://www.wpgraphql.com/logo-wpgraphql.svg" title="WP GraphQL" alt="WP GraphQL Logo" height="32"/>WPGraphQL REPL <span id="beta-tag">Beta</span></h1>
	</Header>
	<Aside
		slot="navbar"
		width={{
			sm: 200,
		}}
		hidden={!opened}
	>
		<ConfigPanel />
	</Aside>

	<WpPlayground />
	<footer slot="footer">
		<p>Copyright © 2023 - AVLIT, LLC. All Rights Reserved.</p>
		<p>
			Brought to you by <a href="https://wpdecoupled.dev" target="_blank" rel="noopener"
				>WP Decoupled</a
			>
		</p>
	</footer>
</AppShell>

<style>
	h1 {
		margin: 0.5em;
		text-align: center;
	}

	#wpgraphql-logo{
		vertical-align: middle;
		height: 48px;
		margin: 0;
	}
	footer {
		display: flex;
		justify-content: space-around;
		align-items: center;
		/* text-align: center; */
	}

	#beta-tag {
		font-size: 0.3em;
		text-transform: uppercase;
		padding: 0.2em;
		border: 1px solid #f97316;
		border-radius: 1em;
		vertical-align: super;
	}
</style>
