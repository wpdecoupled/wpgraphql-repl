<script lang="ts" context="module">
	import { writable } from 'svelte/store';

	export const isMobileConfigOpen = writable(false);
</script>

<script lang="ts">
	import BaseButton from './BaseButton.svelte';
</script>

<BaseButton
	type="mobile"
	icon="settings"
	tooltip="Toggle Mobile Config"
	on:click
	on:click={() => {
		$isMobileConfigOpen = !$isMobileConfigOpen;
	}}
	{...$$restProps}
/>
