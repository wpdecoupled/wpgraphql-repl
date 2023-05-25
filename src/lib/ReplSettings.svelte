<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import Textfield from '@smui/textfield';
	import IconButton from '@smui/icon-button';
	import Tooltip, { Wrapper } from '@smui/tooltip';

	import { getPlaygroundContext } from '$lib/wordpress-playground';
	const {
		config: { name },
	} = getPlaygroundContext();

	const dispatch = createEventDispatcher();
</script>

<Textfield class="name-entry" type="text" variant="standard" bind:value={$name} />

<!-- @TODO: Wire Up with custom events triggering toast messages  -->
<section id="buttons">
	<Wrapper>
		<IconButton
			class="material-icons"
			on:click={async () => {
				await navigator.clipboard.writeText(window.location.href);

				dispatch('toast', {
					message: 'URL Copied to Clipboard',
				});
			}}>content_copy</IconButton
		>
		<Tooltip xPos="start">Copy URL</Tooltip>
	</Wrapper>
	<Wrapper>
		<IconButton
			href="https://github.com/wpdecoupled/wpgraphql-repl/issues/new/choose"
			class="material-icons"
			on:click={() => console.log('clicked bug report')}>contact_support</IconButton
		>
		<Tooltip xPos="start">Contact Developer</Tooltip>
	</Wrapper>
</section>

<style>
	#buttons {
		display: flex;
		/* justify-content: space-between; */
	}
	:global(.name-entry) {
		width: 100%;
	}
</style>
