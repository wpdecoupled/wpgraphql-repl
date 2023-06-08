<script lang="ts">
	import Dialog, { Title, Actions } from '@smui/dialog';

	import { isMobileConfigOpen, CloseByStore } from '$lib/buttons';
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
		<div id="mobile-playground-spacer">
			<PlaygroundSidebar id="default-focus-content" />
		</div>
	</Dialog>
</div>

<style>
	:global(#mobile-playground-config .mdc-dialog__container .mdc-dialog__surface) {
		background-color: var(--color-background);
	}

	#mobile-playground-spacer {
		padding-top: 6px;
		padding-bottom: 6px;
	}
	@media (min-width: 900px) {
		#mobile-playground-config {
			display: none;
		}
	}
</style>
