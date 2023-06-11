<script lang="ts" context="module">
	import { isMobileConfigOpen } from './OpenMobileConfig.svelte';
</script>

<script lang="ts">
	import BaseButton from './BaseButton.svelte';
</script>

<BaseButton
	type="desktop"
	icon="close"
	tooltip="Close Mobile Config"
	on:click
	on:click={() => {
		$isMobileConfigOpen = !$isMobileConfigOpen;
	}}
	{...$$restProps}
/>
