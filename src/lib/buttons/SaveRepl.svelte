<script lang="ts">
	import { page } from '$app/stores';
	import { classNames } from '$lib/string';
	import { toast } from '@zerodevx/svelte-toast';

	import BaseButton, { type ButtonType } from './BaseButton.svelte';

	export let type: ButtonType = 'desktop';

	// $: hasSession = Boolean($page.data.session);
</script>

<BaseButton
	buttonType={type}
	class={classNames('save-repl', {
		'save-repl--inactive': !$page.data.session,
	})}
	icon="save"
	tooltip="Coming Soon!"
	on:click
	on:click={async () => {
		toast.push('REPL Saved');
	}}
	disabled={true}
	{...$$restProps}
/>

<style>
	:global(.save-repl.save-repl--inactive) {
		opacity: 0.5;
	}
</style>
