<script lang="ts">
	import {
		CopyUrl,
		DownloadSite,
		RequestFeature,
		ReportBug,
		OpenMobileConfig,
	} from '../components/buttons';

	export let isMobile = false;
</script>

<section class="menu" class:mobile={isMobile}>
	<OpenMobileConfig on:click />
	<CopyUrl type="mobile" on:click />
	<DownloadSite type="mobile" on:click />
	<ReportBug type="mobile" on:click />
	<RequestFeature type="mobile" />
</section>

<style>
	.menu.mobile {
		overflow: visible;
		background-color: transparent;
		display: flex;
		flex-direction: column-reverse;
		gap: 1em;
		margin-bottom: 1em;
	}
</style>
