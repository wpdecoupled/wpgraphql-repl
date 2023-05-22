<script lang="ts">
	import { wpPluginConfigStore } from '$lib/stores';
	import WpPlayground from '$lib/wordpress-playground';
	import { fns, AppShell, Aside, Header, Title, Footer } from '@svelteuidev/core';

	let isDark = false;
	let opened = true;

	function toggleTheme() {
		isDark = !isDark;
	}
	function toggleOpened() {
		opened = !opened;
	}
</script>

<AppShell
	navbarOffsetBreakpoint="sm"
	asideOffsetBreakpoint="sm"
	padding=0

	>
	<Header slot="header" height=44>
		<Title order={1}>WP GraphQL REPL <span id="beta-tag">Beta</span></Title>
	</Header>
	<Aside
		slot="navbar"
		width={{
			sm: 'fit-content',
		}}
		hidden={!opened}
	>
		<p>Some config here</p>
		<p>Current URL: {$wpPluginConfigStore.url}</p>
	</Aside>

	<WpPlayground />

	<Footer slot="footer" height=50>
		<p>Copyright © 2023 - AVLIT, LLC. All Rights Reserved.</p>
	</Footer>
</AppShell>

<style>
	#beta-tag {
		font-size: 0.5em;
		text-transform: uppercase;
		padding: 0.4em;
		border: 1px solid blue;
		border-radius: 1em;
		/* color: blue; */
	}
</style>
