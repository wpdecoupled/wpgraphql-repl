<script lang="ts">
	import { page } from '$app/stores';

	import { setPlaygroundContext } from '$lib/playground';

	setPlaygroundContext($page.url);
</script>

<slot />
