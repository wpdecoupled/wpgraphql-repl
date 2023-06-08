<script lang="ts">
	import { toast } from '@zerodevx/svelte-toast';

	import BaseButton, { type ButtonType } from './BaseButton.svelte';

	export let type: ButtonType = 'desktop';
</script>

<BaseButton
	buttonType={type}
	icon="content_copy"
	tooltip="Copy URL"
	on:click
	on:click={async () => {
		toast.push('URL copied to clipboard');
		await navigator.clipboard.writeText(window.location.href);
	}}
	{...$$restProps}
/>
