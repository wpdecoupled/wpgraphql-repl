<script lang="ts">
	import BaseButton, { type ButtonType } from './BaseButton.svelte';

	export let type: ButtonType = 'desktop';
</script>

<BaseButton
	{type}
	icon="bug_report"
	tooltip="Report Bug"
	href="https://github.com/wpdecoupled/wpgraphql-repl/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title="
	target="_blank"
	on:click
	{...$$restProps}
/>
