<script lang="ts">
	import { ConfigReplTitle } from '$lib/config';
	import { CopyUrl, DownloadSite, RequestFeature, ReportBug, ToggleMobileMenu } from '$lib/buttons';
  import LoginManagement from './buttons/LoginManagement.svelte';
</script>

<ConfigReplTitle />

<section class="buttons desktop">
	<CopyUrl />
	<DownloadSite />
	<ReportBug />
	<RequestFeature />
	<LoginManagement />
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
