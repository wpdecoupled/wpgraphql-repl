<script lang="ts">
	import Dialog, { Title, Actions } from '@smui/dialog';

	import { isMobileConfigOpen, CloseMobileConfig } from '$lib/control/components/buttons';
	import PlaygroundConfig from './Panel.svelte';
</script>

<div id="mobile-playground-config">
	<Dialog
		bind:open={$isMobileConfigOpen}
		aria-labelledby="default-focus-title"
		aria-describedby="default-focus-content"
	>
		<Title id="default-focus-title" class="sr-only">Playground Config</Title>
		<PlaygroundConfig id="default-focus-content" />

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
