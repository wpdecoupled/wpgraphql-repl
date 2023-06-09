<script lang="ts">
	import { enhance } from '$app/forms';
	import { toast } from '@zerodevx/svelte-toast';

	import BaseButton, { type ButtonType } from './BaseButton.svelte';

	export let type: ButtonType = 'desktop';
</script>

<form action="/auth?/logout" method="post" use:enhance>
	<BaseButton
		buttonType={type}
		icon="logout"
		tooltip="Logout"
		on:click
		on:click={async () => {
			toast.push('Logged out');
		}}
		type="submit"
		{...$$restProps}
	/>
</form>
