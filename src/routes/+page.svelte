<script lang="ts">
	// import BrowserFrame from './BrowserFrame.svelte';
	import GraphiQL, { wpPlugin } from '$lib/graphiql';
	import { wpPlaygroundClientStore } from '$lib/stores';
	import WpPlayground from '$lib/wordpress-playground';

	$: url = $wpPlaygroundClientStore?.getCurrentURL();
</script>

<main>
	<!-- <section>
		{#if !$wpPlaygroundClientStore}
			<p>Starting up WP</p>
		{:else}
			<GraphiQL
				config={{
					plugins: [wpPlugin],
				}}
			/>
		{/if}
	</section> -->
	<section>
		<!-- <BrowserFrame {url}> -->
			<WpPlayground />
		<!-- </BrowserFrame> -->
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		/* padding: 2rem; */
		height: 100vh;

	}

	section {
		width: 100%;
		height: 100%;
	}
</style>
