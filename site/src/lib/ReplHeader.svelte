<script lang="ts">
	import { ConfigReplTitle } from '$lib/config';
	import { CopyUrl, DownloadSite, RequestFeature, ReportBug, ToggleMobileMenu } from '$lib/buttons';
</script>

<ConfigReplTitle />

<section class="buttons desktop">
	<CopyUrl />
	<DownloadSite />
	<ReportBug />
	<RequestFeature />
</section>

<style>
	.buttons.desktop {
		display: flex;
	}

	@media (max-width: 899px) {
		.buttons.desktop {
			display: none;
		}
	}
</style>
