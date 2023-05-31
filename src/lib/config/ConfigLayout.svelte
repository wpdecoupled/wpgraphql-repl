<script lang="ts">
	import Accordion from '@smui-extra/accordion';
</script>

<section>
	<slot name="top" />

	<Accordion>
		<slot name="accordion" />
	</Accordion>

	<slot name="bottom" />
</section>

<style>
	section {
		scroll-behavior: smooth;
		overflow-y: auto;
		padding: 6px;
		border-right: 2px solid var(--color-background);
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
</style>
