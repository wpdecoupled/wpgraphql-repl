<script lang="ts">
	import Textfield from '@smui/textfield';

	import { getPlaygroundContext } from '$lib/wordpress-playground';

	const {
		config: { name },
	} = getPlaygroundContext();
</script>

<Textfield class="name-entry" type="text" variant="standard" bind:value={$name} />

<style>
	:global(.name-entry) {
		width: 100%;
	}
</style>
