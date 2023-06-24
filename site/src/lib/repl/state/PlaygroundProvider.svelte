<script lang="ts">
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
	import { setPlaygroundContext } from '$lib/repl/state';

	if ($page.data.buildContext) {
		setPlaygroundContext($page.data.buildContext);
	} else {
		throw error(500, 'No context builder found');
	}
</script>

<slot />
