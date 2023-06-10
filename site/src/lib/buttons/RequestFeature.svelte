<script lang="ts">
	import BaseButton, { type ButtonType } from './BaseButton.svelte';

	export let type: ButtonType = 'desktop';
</script>

<BaseButton
	{type}
	icon="lightbulb"
	tooltip="Request Feature"
	href="https://github.com/wpdecoupled/wpgraphql-repl/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.md&title="
	target="_blank"
	on:click
	{...$$restProps}
/>
