<script lang="ts">
	import Textfield from '@smui/textfield';
	import { Icon } from '@smui/icon-button';
	import Card from '@smui/card';

	import { getPlaygroundContext } from '$lib/repl/state';
	import { toast } from '@zerodevx/svelte-toast';

	const {
		config: { wpUrl },
		client,
	} = getPlaygroundContext();

	// We don't want the URL to update till after the user has finished typing and pressed enter to trigger the navigation.
	$: workingUrl = $wpUrl;
</script>

<Card padded>
	<Textfield
		type="url"
		variant="filled"
		label="WordPress URL"
		bind:value={workingUrl}
		on:keydown={(e) => {
			// @ts-expect-error
			if (e.key === 'Enter') {
				if ($client !== null) {
					$client.goTo(workingUrl);
					toast.push('Navigating to URL');
				} else {
					throw Error('Client is not ready');
				}
			}
		}}
	>
		<Icon class="material-icons" slot="trailingIcon">link</Icon>
	</Textfield>
</Card>
