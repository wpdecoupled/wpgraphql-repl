<script lang="ts">
	import type { Writable } from 'svelte/store';
	import BaseButton from './BaseButton.svelte';

	export let store: Writable<boolean>;
	export let tooltip: string;
</script>

<BaseButton
	buttonType="desktop"
	icon="close"
	{tooltip}
	on:click
	on:click={() => {
		$store = false;
	}}
	{...$$restProps}
/>
