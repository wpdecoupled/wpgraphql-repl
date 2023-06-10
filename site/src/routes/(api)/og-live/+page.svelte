<script>
	import OgImage from '$lib/social/OgImage.svelte';
</script>

<div class="background">
	<div class="card">
		<OgImage />
	</div>
</div>

<style>
	@font-face {
		font-family: 'Inter';
		src: url('/src/lib/social/Inter-Regular.ttf');
	}

	:global(body) {
		margin: 0;
	}

	.background {
		box-sizing: content-box;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		background-color: grey;
		margin: 0;
		padding: 0;
	}

	.card {
		height: 630px;
		width: 1200px;
	}
</style>
