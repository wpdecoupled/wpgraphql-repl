<script lang="ts" context="module">
	export type ButtonType = "mobile" | "desktop";
</script>

<script lang="ts">
	import ConditionalWrapper from '$lib/ConditionalWrapper.svelte';
	import IconButton, { Icon } from '@smui/icon-button';
	import Fab from '@smui/fab';
	import Tooltip, { Wrapper } from '@smui/tooltip';

	export let type: ButtonType;
	export let icon: string;
	export let tooltip: string;
</script>

<ConditionalWrapper tag={Wrapper} condition={type === 'desktop'}>
	<svelte:component
		this={type === 'mobile' ? Fab : IconButton}
		class={type === 'desktop' ? 'material-icons' : undefined}
		on:click
		{...$$restProps}
	>
		{#if type === 'mobile'}
			<Icon class="material-icons">{icon}</Icon>
		{:else}
			{icon}
		{/if}
	</svelte:component>
	{#if type === 'desktop'}
		<Tooltip xPos="start">{tooltip}</Tooltip>
	{/if}
</ConditionalWrapper>
