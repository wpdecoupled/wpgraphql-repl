<script lang="ts">
	import Textfield from '@smui/textfield';

	import { repl_state } from '$lib/repl/state';

	let name = $repl_state.name;

	$: repl_state.dispatch({
		type: 'update_name',
		value: name,
	});
</script>

<Textfield class="name-entry" type="text" variant="standard" bind:value={name} />

<style>
	:global(.name-entry) {
		width: 100%;
	}
</style>
