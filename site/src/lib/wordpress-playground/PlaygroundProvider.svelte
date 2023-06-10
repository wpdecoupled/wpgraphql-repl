<script lang="ts">
	import { page } from '$app/stores';

	import { setPlaygroundContext } from '$lib/wordpress-playground';

	setPlaygroundContext($page.url);
</script>

<slot />
