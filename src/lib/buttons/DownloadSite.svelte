<script lang="ts">
	import { zipEntireSite } from '@wp-playground/client';
	import slugify from 'slugify';
	import IconButton from '@smui/icon-button';
	import Tooltip, { Wrapper } from '@smui/tooltip';

	import { getPlaygroundContext } from '$lib/wordpress-playground';

	const {
		config: { name },
		client,
	} = getPlaygroundContext();

	$: handleDownload = async () => {
		const timeStart = Date.now();
		console.log('creating zip file');
		const file = await zipEntireSite($client);
		const timeEnd = Date.now();
		console.log('zip file created in ', timeEnd - timeStart, 'ms');
		const fileUrl = URL.createObjectURL(file);
		const fileName = `${slugify($name)}.zip`;
		const a = document.createElement('a');

		a.href = fileUrl;
		a.download = fileName || 'download';

		a.click();

		URL.revokeObjectURL(fileUrl);
	};
</script>

<!-- @TODO: Wire Up with custom events triggering toast messages  -->
<Wrapper>
	<IconButton class="material-icons" on:click={handleDownload}>download</IconButton>
	<Tooltip xPos="start">Download WP Site</Tooltip>
</Wrapper>
