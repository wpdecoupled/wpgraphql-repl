<script lang="ts" context="module">
	export type ButtonType = 'mobile' | 'desktop';
</script>

<script lang="ts">
	import ConditionalWrapper from '$lib/ConditionalWrapper.svelte';
	import IconButton, { Icon } from '@smui/icon-button';
	import Fab from '@smui/fab';
	import Button, { Label } from '@smui/button';
	import Tooltip, { Wrapper } from '@smui/tooltip';

	export let buttonType: ButtonType;
	export let icon: string;
	export let tooltip: string;
	export let content: string = '';
</script>

<ConditionalWrapper tag={Wrapper} condition={buttonType === 'desktop'}>
	<svelte:component
		this={buttonType === 'mobile' ? Fab : content ? Button : IconButton}
		class={buttonType === 'desktop' && !content ? 'material-icons' : undefined}
		on:click
		{...$$restProps}
	>
		{#if buttonType === 'mobile'}
			<Icon class="material-icons">{icon}</Icon>
		{:else if content}
			<Icon class="material-icons">{icon}</Icon>

			{#if content}
				<Label class="button-conent">
					{content}
				</Label>
			{/if}
		{:else}
			{icon}
		{/if}
	</svelte:component>
	{#if buttonType === 'desktop'}
		<Tooltip xPos="start">{tooltip}</Tooltip>
	{/if}
</ConditionalWrapper>
