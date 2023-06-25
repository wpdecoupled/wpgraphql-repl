<script lang="ts">
	import Textfield from '@smui/textfield';

	import { replState, setReplName } from '$lib/repl/state';

	let name = $replState.name;

	$: setReplName(name);
</script>

<Textfield class="name-entry" type="text" variant="standard" bind:value={name} />

<style>
	:global(.name-entry) {
		width: 100%;
	}
</style>
