<script lang="ts">
	import BaseButton, { type ButtonType } from './BaseButton.svelte';

	export let type: ButtonType = 'desktop';
</script>

<BaseButton
	{type}
	icon="contact_support"
	tooltip="Contact Developer"
	href="https://github.com/wpdecoupled/wpgraphql-repl/issues/new/choose"
	target="_blank"
	on:click
	{...$$restProps}
/>
