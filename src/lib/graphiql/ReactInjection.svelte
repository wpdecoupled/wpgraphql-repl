<script lang="ts">
	import { onMount } from 'svelte';

	import React from 'react';
	import ReactDOM from 'react-dom';

	import 'graphiql/graphiql.min.css';

	export let component: any;
	export let props: object;

	let root: HTMLDivElement;

	onMount(() => {
		ReactDOM.render(React.createElement(component, props), root);
	});
</script>

<div bind:this={root} id="root">Loading...</div>
