<script lang="ts">
	import { ConfigLayout, ConfigUrl, ConfigStack, ConfigPlugins } from '$lib/config';
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

