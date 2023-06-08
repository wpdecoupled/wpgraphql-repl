<script lang="ts" context="module">
	import { writable } from 'svelte/store';

	export let isProfileOpen = writable(false);
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';

	import Fab from '@smui/fab';
	import Button, { Icon, Label } from '@smui/button';
	import BaseButton, { type ButtonType } from './BaseButton.svelte';
  import { toast } from '@zerodevx/svelte-toast';

	export let type: ButtonType = 'desktop';

	function openProfile() {
		$isProfileOpen = true;
	}
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
			on:click={() => {
				toast.push('Logging in...')
			}}
			type="submit"
			{...$$restProps}
		/>
	</form>
{:else if type === 'desktop'}
	<Button on:click={openProfile} variant="text" style={'padding: 0;'}>
		<div class="user-menu">
			<span class="user-menu__name">{$page.data.session.user.user_metadata.name}</span>
			<img
				class="user-menu__avatar"
				src={$page.data.session.user.user_metadata.avatar_url}
				alt="user profile photo"
				aria-hidden="true"
			/>
		</div>
	</Button>
{:else}
	<Fab on:click on:click={openProfile} {...$$restProps}>
		<img
			class="user-menu__avatar mobile"
			src={$page.data.session.user.user_metadata.avatar_url}
			alt="user profile photo"
			aria-hidden="true"
		/>
	</Fab>
{/if}

<style>
	.user-menu {
		display: flex;
		align-items: center;
		padding-left: 12px;
		border-left: solid 1px var(--color-highlight);
		color: var(--color-primary);
	}

	.user-menu .user-menu__name {
		margin-right: 1rem;
		white-space: nowrap;
	}

	.user-menu__avatar {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
	}

	.user-menu__avatar.mobile {
		width: 56px;
		height: 56px;
	}
</style>
