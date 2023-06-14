<script lang="ts">
	import { browser } from '$app/environment';
	import * as toast from '$lib/utils/toast';
	import { getPlaygroundContext } from '$lib/repl/state';

	const {
		config: {
			stackVersions: { wp, php },
		},
	} = getPlaygroundContext();

	const config = {
		duration: 8000,
	};

	$: if (browser) {
		toast.notify(`Building with WP v${$wp}`, config);
	}

	$: if (browser) {
		toast.notify(`Building with PHP v${$php}`, config);
	}
</script>
