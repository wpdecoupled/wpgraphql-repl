<script lang="ts">
	import { zipWpContent } from '@wp-playground/client';
	import slugify from 'slugify';
	import * as toast from '$lib/utils/toast';

	import { repl_state } from '$lib/repl/state';
	import BaseButton, { type ButtonType } from './BaseButton.svelte';

	export let type: ButtonType = 'desktop';

	$: ({ name, client } = $repl_state);

	$: handleDownload = async () => {
		const prepToast = toast.loading('Preparing Zip for Download.', {
			next: 0.5,
			duration: 2000,
		});

		const file = await zipWpContent(client);
		prepToast.update({ next: 0.75 });

		console.log('file', file)

		const fileUrl = URL.createObjectURL(new File([file], `${slugify(name)}.zip`));
		// const fileName = `${slugify(name)}.zip`;
		const a = document.createElement('a');
		prepToast.complete({ msg: 'Downloading...' });

		a.href = fileUrl;

		a.click();

		URL.revokeObjectURL(fileUrl);
	};
</script>

<BaseButton
	{type}
	icon="download"
	tooltip="Download WP Site"
	disabled={!client}
	on:click
	on:click={handleDownload}
	{...$$restProps}
/>
