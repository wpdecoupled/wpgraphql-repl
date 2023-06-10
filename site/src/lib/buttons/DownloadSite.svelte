<script lang="ts">
	import { zipEntireSite } from '@wp-playground/client';
	import slugify from 'slugify';
	import { toast } from '@zerodevx/svelte-toast';

	import { getPlaygroundContext } from '$lib/wordpress-playground';
	import BaseButton, { type ButtonType } from './BaseButton.svelte';

	export let type: ButtonType = 'desktop';

	const {
		config: { name },
		client,
	} = getPlaygroundContext();

	$: handleDownload = async () => {
		const id = toast.push('Preparing Zip for Download...', {
			dismissable: false,
			duration: 20000,
		});
		const timeStart = Date.now();
		console.log('creating zip file');
		const file = await zipEntireSite($client);
		toast.pop(id);

		const timeEnd = Date.now();
		console.log('zip file created in ', timeEnd - timeStart, 'ms');
		const fileUrl = URL.createObjectURL(file);
		const fileName = `${slugify($name)}.zip`;
		const a = document.createElement('a');

		a.href = fileUrl;
		a.download = fileName || 'download';

		a.click();
		toast.push('Downloading zip!');

		URL.revokeObjectURL(fileUrl);
	};
</script>

<BaseButton
	{type}
	icon="download"
	tooltip="Download WP Site"
	on:click
	on:click={handleDownload}
	{...$$restProps}
/>
