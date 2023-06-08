<script lang="ts">
	import { ConfigReplTitle } from '$lib/config';
	import { CopyUrl, DownloadSite, RequestFeature, ReportBug, Login, SaveRepl } from '$lib/buttons';
</script>

<ConfigReplTitle />

<section class="buttons desktop">
	<CopyUrl />
	<DownloadSite />
	<SaveRepl />
	<ReportBug />
	<RequestFeature />
	<Login />
</section>

<style>
	.buttons.desktop {
		display: flex;
		align-items: center;
	}

	@media (max-width: 899px) {
		.buttons.desktop {
			display: none;
		}
	}
</style>
