<script lang="ts">
	import { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import Select, { Option } from '@smui/select';
	import { getPlaygroundContext } from '$lib/repl/state';

	import { SupportedWordPressVersionsList, SupportedPHPVersionsList } from 'wpgraphql-playground';

	const {
		config: {
			stackVersions: { wp, php },
		},
	} = getPlaygroundContext();

	let stackPanel = false;
</script>

<Panel bind:open={stackPanel}>
	<Header>
		<h3>Stack</h3>
		<IconButton slot="icon" toggle pressed={stackPanel}>
			<Icon class="material-icons" on>settings</Icon>
			<Icon class="material-icons">expand_more</Icon>
		</IconButton>
	</Header>
	<Content>
		<div class="select-stack">
			<Select class="stack-item" variant="filled" bind:value={$wp} label="WordPress Version">
				{#each SupportedWordPressVersionsList as version}
					<Option value={version}>{version}</Option>
				{/each}
			</Select>
			<Select
				class="stack-item"
				variant="filled"
				bind:value={$php}
				label="PHP Version"
			>
				{#each SupportedPHPVersionsList as version}
					<Option value={version}>{version}</Option>
				{/each}
			</Select>
		</div>
	</Content>
</Panel>

<style>
	.select-stack {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1em;
	}

	.select-stack :global(.stack-item) {
		flex: 1;
	}
</style>
