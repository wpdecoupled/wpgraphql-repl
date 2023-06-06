<script lang="ts">
	import { ConfigReplTitle } from '$lib/config';
	import { CopyUrl, DownloadSite, RequestFeature, ReportBug } from '$lib/buttons';
</script>

<ConfigReplTitle />

<section id="buttons">
	<CopyUrl />
	<DownloadSite />
	<ReportBug />
	<RequestFeature />
</section>

<style>
	#buttons {
		display: flex;
		/* justify-content: space-between; */
	}
</style>
