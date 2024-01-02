<script lang="ts">
	import Textfield from '@smui/textfield';
	import { Icon } from '@smui/icon-button';
	import Card from '@smui/card';

	import * as toast from '$lib/utils/toast';
	import { repl_state } from '$lib/repl/state';

	$: ({ url, client } = $repl_state);

	$: hasClient = Boolean(client);

	// We don't want the URL to update till after the user has finished typing and pressed enter to trigger the navigation.
	$: workingUrl = url;
</script>

<Card padded>
	<Textfield
		type="url"
		variant="filled"
		label="WordPress URL"
		disabled={!hasClient}
		bind:value={workingUrl}
		on:keydown={(e) => {
			// @ts-expect-error - Svelte doesn't know about key for some reason
			if (e.key === 'Enter') {
				if (client !== null) {
					repl_state.dispatch({
						type: 'set-url',
						value: workingUrl,
					});
					toast.notify('Navigating to URL');
				} else {
					throw Error('Client is not ready');
				}
			}
		}}
	>
		<Icon class="material-icons" slot="trailingIcon">link</Icon>
	</Textfield>
</Card>
