<script lang="ts">
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';

	import BaseButton, { type ButtonType } from './BaseButton.svelte';

	export let type: ButtonType = 'desktop';
</script>

{#if !$page.data.session}
	<form action="/auth?/login" method="post" use:enhance>
		<BaseButton
			buttonType={type}
			icon="login"
			tooltip="Log in"
			content="Log in to save"
			width="wide"
			style={type === 'desktop' ? 'width: max-content;' : ''}
			on:click
			type="submit"
			{...$$restProps}
		/>
	</form>
{:else}
	<form action="/auth?/logout" method="post" use:enhance>
		<BaseButton buttonType={type} icon="logout" tooltip="Log out" on:click {...$$restProps} />
	</form>
{/if}
