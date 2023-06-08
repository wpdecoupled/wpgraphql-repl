<script lang="ts" context="module">
	import { writable } from 'svelte/store';

	export const isMobileMenuOpen = writable(false);
</script>

<script lang="ts">
	import BaseButton from './BaseButton.svelte';
</script>

<BaseButton
	type="mobile"
	icon="menu"
	tooltip="Toggle Mobile Menu"
	on:click={() => {
		$isMobileMenuOpen = !$isMobileMenuOpen;
	}}
/>
