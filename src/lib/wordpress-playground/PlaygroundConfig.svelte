<script lang="ts">
	import ConfigLayout from './ConfigLayout.svelte';
	import ConfigUrl from './ConfigUrl.svelte';
	import ConfigStack from './ConfigStack.svelte';
	import ConfigPlugins from './ConfigPlugins.svelte';
</script>

<ConfigLayout>
	<svelte:fragment slot="top">
		<ConfigUrl />
	</svelte:fragment>

	<svelte:fragment slot="accordion">
		<ConfigStack />
		<ConfigPlugins />
	</svelte:fragment>
</ConfigLayout>

<!-- <style>
</style> -->
