<script lang="ts">
	import MenuSurface from '@smui/menu-surface';

	import {
		CopyUrl,
		DownloadSite,
		RequestFeature,
		ReportBug,
		ToggleMobileMenu,
		isMobileMenuOpen,
		OpenMobileConfig,
		LoginManagement
	} from '$lib/buttons';
	let menu;

	function toggleMenu() {
		$isMobileMenuOpen = !$isMobileMenuOpen;
	}

	$: menu?.setOpen($isMobileMenuOpen);
</script>

<aside class="buttons mobile">
	<ToggleMobileMenu />

	<MenuSurface
		bind:this={menu}
		anchorCorner="BOTTOM_START"
		style="box-shadow: none; overflow:visible"
	>
		<section class="menu mobile">
			<OpenMobileConfig on:click={toggleMenu} />
			<CopyUrl type="mobile" on:click={toggleMenu} />
			<DownloadSite type="mobile" on:click={toggleMenu} />
			<ReportBug type="mobile" on:click={toggleMenu} />
			<RequestFeature type="mobile" on:click={toggleMenu} />
			<LoginManagement type="mobile" on:click={toggleMenu} />
		</section>
	</MenuSurface>
</aside>

<style>
	.buttons.mobile {
		display: unset;
		position: fixed;
		bottom: 2rem;
		right: 2rem;

		--mdc-theme-surface: transparent;
	}
	@media (min-width: 900px) {
		.buttons.mobile {
			display: none;
		}
	}

	.menu.mobile {
		overflow: visible;
		background-color: transparent;
		display: flex;
		flex-direction: column-reverse;
		gap: 1em;
		margin-bottom: 1em;
	}
</style>
