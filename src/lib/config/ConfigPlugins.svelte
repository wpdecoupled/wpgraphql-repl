<script lang="ts">
	// import Textfield from '@smui/textfield';
	// import List, { Item, Text, PrimaryText } from '@smui/list';
	import { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	// import { plugins } from '$lib/graphql-plugins';

	// import {
	// getPlaygroundContext,
	// } from '$lib/wordpress-playground';
	import ConfigComingSoon from './ConfigComingSoon.svelte';

	// const { client } = getPlaygroundContext();

	let pluginPanel = false;
</script>

<Panel bind:open={pluginPanel}>
	<Header>
		<h3>Plugins</h3>
		<IconButton slot="icon" toggle pressed={pluginPanel}>
			<Icon class="material-icons" on>extension</Icon>
			<Icon class="material-icons">expand_more</Icon>
		</IconButton>
	</Header>
	<Content>
		<ConfigComingSoon />
		<!-- <List on:change={(e) => console.log('change', e)}>
			{#each plugins as plugin}
				<Item>
					<Text>
						<PrimaryText>{plugin.name}</PrimaryText>
					</Text>

					<Switch bind:value={selectedPlugins} data-value={plugin.slug} />
				</Item>
			{/each}
		</List> -->
	</Content>
</Panel>
