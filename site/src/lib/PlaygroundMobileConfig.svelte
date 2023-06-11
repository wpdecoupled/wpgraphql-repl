<script lang="ts">
	import Dialog, { Title, Actions } from '@smui/dialog';

	import { isMobileConfigOpen, CloseMobileConfig } from '$lib/buttons';
	import PlaygroundSidebar from '$lib/PlaygroundSidebar.svelte';

	function closeConfig() {
		$isMobileConfigOpen = false;
	}
</script>

<div id="mobile-playground-config">
	<Dialog
		bind:open={$isMobileConfigOpen}
		aria-labelledby="default-focus-title"
		aria-describedby="default-focus-content"
	>
		<Title id="default-focus-title" class="sr-only">Playground Config</Title>
		<PlaygroundSidebar id="default-focus-content" />

		<Actions>
			<CloseMobileConfig />
		</Actions>
	</Dialog>
</div>

<style>
	@media (min-width: 900px) {
		#mobile-playground-config {
			display: none;
		}
	}
</style>
