<script lang="ts">
	import MenuSurface from '@smui/menu-surface';
	import ReplMenuPanel from './panels/Menu.svelte';

	import {
		ToggleMobileMenu,
		isMobileMenuOpen,
	} from './components/buttons';
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

		<ReplMenuPanel on:click={toggleMenu} isMobile/>
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


</style>
