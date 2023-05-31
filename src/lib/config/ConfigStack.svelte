<script lang="ts">
	import { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import Select, { Option } from '@smui/select';
	import {
		SupportedWordPressVersionsList,
		SupportedPHPVersionsList,
		getPlaygroundContext,
	} from '$lib/wordpress-playground';

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
		<Select variant="filled" bind:value={$wp} label="WordPress Version">
			{#each SupportedWordPressVersionsList as version}
				<Option value={version}>{version}</Option>
			{/each}
		</Select>
		<Select variant="filled" bind:value={$php} label="PHP Version">
			{#each SupportedPHPVersionsList as version}
				<Option value={version}>{version}</Option>
			{/each}
		</Select>
	</Content>
</Panel>
