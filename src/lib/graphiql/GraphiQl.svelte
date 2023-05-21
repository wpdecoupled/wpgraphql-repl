<script lang="ts">
	import GraphiQL, { type GraphiQLProps } from 'graphiql';
	import ReactInjection from './ReactInjection.svelte';
	import { wpPlaygroundClientStore } from '$lib/stores';

  import { makeFetcher } from './WPPlugin';

	export let config: Partial<GraphiQLProps> = {};

	const props: GraphiQLProps = {
		fetcher: makeFetcher($wpPlaygroundClientStore),
		defaultEditorToolsVisibility: true,
		...config,
	};
</script>

<ReactInjection component={GraphiQL} {props} />
```
