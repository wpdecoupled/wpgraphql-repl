<script lang="ts">
	import { browser } from '$app/environment';
	import { toast } from '@zerodevx/svelte-toast';
	import { getPlaygroundContext } from '$lib/wordpress-playground';

	const {
		config: {
			stackVersions: { wp, php },
			wpUrl,
		},
	} = getPlaygroundContext();

	$: if (browser) {
		toast.push(`Rebuilding with WordPress version: ${$wp}`);
	}

	$: if (browser) {
		toast.push(`Rebuilding with PHP version: ${$php}`);
	}
</script>
