<script lang="ts">
	import Dialog, { Title, Actions } from '@smui/dialog';

	import { isProfileOpen, CloseByStore, Logout } from '$lib/buttons';
</script>

<div id="repl-profile">
	<Dialog
		bind:open={$isProfileOpen}
		aria-labelledby="profile-focus-title"
		aria-describedby="profile-focus-content"
	>
		<Title id="profile-focus-title" class="sr-only">Profile</Title>
		<!-- <PlaygroundSidebar id="profile-focus-content" /> -->
		<h3>Coming soon!</h3>
		<Actions>
			<Logout type="desktop" on:click={() => ($isProfileOpen = !$isProfileOpen)} />
			<CloseByStore store={isProfileOpen} tooltip="Close Profile" />
		</Actions>
	</Dialog>
</div>
