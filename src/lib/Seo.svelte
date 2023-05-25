<script lang="ts">
	import { getPlaygroundContext } from '$lib/wordpress-playground';

	const {
		config: { name },
	} = getPlaygroundContext();
</script>


<svelte:head>
	<title>{$name} • REPL • WPGraphQL</title>
</svelte:head>
