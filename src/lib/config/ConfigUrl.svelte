<script lang="ts">
	import Textfield from '@smui/textfield';
	import { Icon } from '@smui/icon-button';
	import Card from '@smui/card';
	import { getPlaygroundContext } from '$lib/wordpress-playground';

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
			if (e.key === 'Enter') {
				if ($client !== null) {
					$client.goTo(workingUrl);
				} else {
					throw Error('Client is not ready');
				}
			}
		}}
	>
		<Icon class="material-icons" slot="trailingIcon">link</Icon>
	</Textfield>
</Card>
