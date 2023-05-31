<script lang="ts">
	import { ConfigReplTitle } from '$lib/config';
	import { CopyUrl, DownloadSite, ContactDev } from '$lib/buttons';
</script>

<ConfigReplTitle />

<section id="buttons">
	<CopyUrl />
	<DownloadSite />
	<ContactDev />
</section>

<style>
	#buttons {
		display: flex;
		/* justify-content: space-between; */
	}
</style>
