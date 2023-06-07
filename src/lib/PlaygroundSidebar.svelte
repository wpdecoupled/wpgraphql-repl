<script lang="ts">
	import Accordion from '@smui-extra/accordion';

	import { ConfigUrl, ConfigStack, ConfigPlugins } from '$lib/config';
</script>

<section>
	<ConfigUrl />

	<Accordion>
		<ConfigStack />
		<ConfigPlugins />
	</Accordion>
</section>

<style>
	section {
		scroll-behavior: smooth;
		overflow-y: scroll;
		padding: 6px;
		border-right: 2px solid var(--color-background);
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
</style>
