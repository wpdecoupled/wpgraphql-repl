<script lang="ts">
	import IconButton from '@smui/icon-button';
	import Tooltip, { Wrapper } from '@smui/tooltip';
	import { toast } from '@zerodevx/svelte-toast';
</script>

<!-- @TODO: Wire Up with custom events triggering toast messages  -->
<Wrapper>
	<IconButton
		class="material-icons"
		on:click={async () => {
			toast.push('URL copied to clipboard');
			await navigator.clipboard.writeText(window.location.href);
		}}>content_copy</IconButton
	>
	<Tooltip xPos="start">Copy URL</Tooltip>
</Wrapper>
