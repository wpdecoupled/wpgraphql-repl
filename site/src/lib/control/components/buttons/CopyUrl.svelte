<script lang="ts">
	import * as toast from '$lib/utils/toast';

	import BaseButton, { type ButtonType } from './BaseButton.svelte';

	export let type: ButtonType = 'desktop';
</script>

<BaseButton
	{type}
	icon="content_copy"
	tooltip="Copy URL"
	on:click
	on:click={async () => {
		toast.notify('URL copied to clipboard');
		await navigator.clipboard.writeText(window.location.href);
	}}
	{...$$restProps}
/>
