<script lang="ts">
	import { browser } from '$app/environment';
	import * as toast from '$lib/utils/toast';
	import { replState } from '$lib/repl/state';

	$: ({ wpVersion, phpVersion } = $replState);

	const config = {
		duration: 8000,
	};

	$: if (browser) {
		toast.notify(`Building with WP v${wpVersion}`, config);
	}

	$: if (browser) {
		toast.notify(`Building with PHP v${phpVersion}`, config);
	}
</script>
