<script lang="ts">
	import { zipEntireSite } from '@wp-playground/client';
	import slugify from 'slugify';
	import * as toast from '$lib/utils/toast';

	import { replState } from '$lib/repl/state';
	import BaseButton, { type ButtonType } from './BaseButton.svelte';

	export let type: ButtonType = 'desktop';

	$: ({ name, client } = $replState);

	$: handleDownload = async () => {
		const prepToast = toast.loading('Preparing Zip for Download.', {
			next: 0.5,
			duration: 2000,
		});

		const file = await zipEntireSite(client);
		prepToast.update({ next: 0.75 });

		const fileUrl = URL.createObjectURL(file);
		const fileName = `${slugify(name)}.zip`;
		const a = document.createElement('a');
		prepToast.complete({ msg: 'Downloading...' });

		a.href = fileUrl;
		a.download = fileName || 'download';

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
