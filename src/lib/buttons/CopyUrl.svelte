<script lang="ts">
	import IconButton from '@smui/icon-button';
	import Tooltip, { Wrapper } from '@smui/tooltip';
</script>

<!-- @TODO: Wire Up with custom events triggering toast messages  -->
<Wrapper>
	<IconButton
		class="material-icons"
		on:click={async () => {
			await navigator.clipboard.writeText(window.location.href);
		}}>content_copy</IconButton
	>
	<Tooltip xPos="start">Copy URL</Tooltip>
</Wrapper>
