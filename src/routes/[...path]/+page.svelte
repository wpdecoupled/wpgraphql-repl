<script lang="ts">
	import { wpUrl, wpVersion, phpVersion } from '$lib/wordpress-playground';
	import WpPlayground from '$lib/wordpress-playground';
	import { SupportedWordPressVersionsList } from '$lib/wordpress-playground';
	import { AppShell, Aside, Header, Title, Divider, Footer, NativeSelect } from '@svelteuidev/core';
	import { SupportedPHPVersionsList } from '@wp-playground/client';

	// import type { PageData } from './$types';

	// export let data: PageData;

	// console.log('data', data)
	$: console.log('phpVersion', $phpVersion);
	$: console.log('wpVersion', $wpVersion);
	$: console.log('wpUrl', $wpUrl);

	let isDark = false;
	let opened = true;

	function toggleTheme() {
		isDark = !isDark;
	}
	function toggleOpened() {
		opened = !opened;
	}
</script>

<AppShell navbarOffsetBreakpoint="sm" asideOffsetBreakpoint="sm" padding="0">
	<Header slot="header" height="44">
		<Title order={1}>WP GraphQL REPL <span id="beta-tag">Beta</span></Title>
	</Header>
	<Aside
		slot="navbar"
		width={{
			sm: 200,
		}}
		hidden={!opened}
	>
		<Title order={2}>WP Settings</Title>
		<Divider />
		<NativeSelect
			data={SupportedWordPressVersionsList}
			bind:value={$wpVersion}
			label="WordPress Version"
			description="The version of WordPress to use for the GraphQL API."
			variant="unstyled"
		/>
		<NativeSelect
			data={SupportedPHPVersionsList}
			bind:value={$phpVersion}
			label="PHP Version"
			description="The version of PHP to use with WordPress."
			variant="unstyled"
		/>
	</Aside>

	<WpPlayground />

	<Footer slot="footer" height="50">
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
