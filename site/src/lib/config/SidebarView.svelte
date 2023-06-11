<script lang="ts">
	import { Resizable } from '$lib/utils/components';
	import ConfigPanel from './Panel.svelte';
</script>

<Resizable as="aside" class="config-sidebar" horizontal>
	<ConfigPanel />
	<slot />
</Resizable>

<style>
	:global(.config-sidebar) {
		overflow-y: hidden;
		grid-area: aside;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 100%;
		min-width: 300px;
		background-color: var(--color-background);
	}

	@media (max-width: 899px) {
		:global(.config-sidebar) {
			display: none;
		}
	}
</style>
