<script lang="ts">
	import Textfield from '@smui/textfield';
	import List from '@smui/list';
	import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import Select, { Option } from '@smui/select';
	import Card from '@smui/card';
	import {
		SupportedWordPressVersionsList,
		SupportedPHPVersionsList,
		getPlaygroundContext,
	} from '$lib/wordpress-playground';

	const {
		config: {
			wpUrl,
			stackVersions: { wp, php },
		},
		client,
	} = getPlaygroundContext();

	// We don't want the URL to update till after the user has finished typing and pressed enter to trigger the navigation.
	$: workingUrl = $wpUrl;

	let stackPanel = false;
	let pluginPanel = false;
</script>

<section>
	<Card padded>
		<Textfield
			type="url"
			variant="filled"
			label="WordPress URL"
			bind:value={workingUrl}
			on:keydown={(e) => {
				if (e.key === 'Enter') {
					$client.goTo(workingUrl);
				}
			}}
		>
		<Icon class="material-icons" slot="trailingIcon">link</Icon>
		</Textfield>
	</Card>
	<Accordion>
		<Panel>
			<Header bind:open={stackPanel}>
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
	</Accordion>
	<Accordion>
		<Panel>
			<Header bind:open={pluginPanel}>
				<h3>Plugins</h3>
				<IconButton slot="icon" toggle pressed={pluginPanel}>
					<Icon class="material-icons" on>extension</Icon>
					<Icon class="material-icons">expand_more</Icon>
				</IconButton>
			</Header>
			<Content>

			</Content>
		</Panel>
	</Accordion>

	<!-- <Button
		variant="filled"
		title="Reset State"
		on:click={() => {
			$client.reset();
		}}>Reset Playground</Button
	> -->
</section>

<style>
	section {
		padding: 6px;
		border-right: 2px solid var(--color-background);
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
</style>
