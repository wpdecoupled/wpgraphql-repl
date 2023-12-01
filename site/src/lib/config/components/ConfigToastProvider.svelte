<script lang="ts">
	import { browser } from '$app/environment';
	import * as toast from '$lib/utils/toast';
	import { repl_state } from '$lib/repl/state';

	$: ({ wp_version, php_version } = $repl_state);

	const config = {
		duration: 6000,
	};

	$: if (browser) {
		toast.notify(`Building with WP v${wp_version}`, config);
	}

	$: if (browser) {
		toast.notify(`Building with PHP v${php_version}`, config);
	}
</script>
