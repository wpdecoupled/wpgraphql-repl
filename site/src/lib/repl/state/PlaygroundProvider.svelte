<script lang="ts">
	import { page } from '$app/stores';

	import { setPlaygroundContext } from '$lib/repl/state';

	setPlaygroundContext($page.url);
</script>

<slot />
