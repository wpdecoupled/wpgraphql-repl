<script lang="ts">
	import { browser } from '$app/environment';
	import * as toast from '$lib/utils/toast';
	import { repl_state } from '$lib/repl/state';

	$: ({ wp, php } = $repl_state);

	const config = {
		duration: 6000,
	};

	$: if (browser) {
		toast.notify(`Building with WP v${wp}`, config);
	}

	$: if (browser) {
		toast.notify(`Building with PHP v${php}`, config);
	}
</script>
