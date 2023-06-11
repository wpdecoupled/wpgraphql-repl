<script lang="ts">
	import { browser } from '$app/environment';
	import { toast } from '@zerodevx/svelte-toast';
	import { getPlaygroundContext } from '$lib/repl/state';

	const {
		config: {
			stackVersions: { wp, php },
			wpUrl,
		},
	} = getPlaygroundContext();

	const config = {
		duration: 6000,
		initial: 0,
		next: 1,
	};

	$: if (browser) {
		toast.push(`Building with WP v${$wp}`, { duration: 6000 });
	}

	$: if (browser) {
		toast.push(`Building with PHP v${$php}`, { duration: 6000 });
	}
</script>
