<script lang="ts">
	import { ConfigReplTitle } from '../components';
	import { CopyUrl, DownloadSite, RequestFeature, ReportBug } from '../components/buttons';
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
