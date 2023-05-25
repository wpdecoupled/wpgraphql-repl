<script lang="ts">
	import { getPlaygroundContext } from '$lib/wordpress-playground';

	const {
		config: { name },
	} = getPlaygroundContext();
</script>

<section>
	<input type="text" bind:value={$name} />
</section>
