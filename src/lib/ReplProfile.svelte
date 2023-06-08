<script lang="ts">
	import Dialog, { Title, Actions } from '@smui/dialog';

	import { isProfileOpen, Logout } from '$lib/buttons';
</script>

<div id="repl-profile">
	<Dialog
		bind:open={$isProfileOpen}
		aria-labelledby="profile-focus-title"
		aria-describedby="profile-focus-content"
	>
		<Title id="profile-focus-title" class="sr-only">Profile</Title>
		<!-- <PlaygroundSidebar id="profile-focus-content" /> -->
		<div class="profile-layout">
			<Logout type="desktop" content="Log out" on:click={() => ($isProfileOpen = !$isProfileOpen)} />
		</div>
	</Dialog>
</div>

<style>
	.profile-layout {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
