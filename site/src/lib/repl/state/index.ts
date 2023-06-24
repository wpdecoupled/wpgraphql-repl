import { getContext, setContext } from 'svelte';

import type { Writable } from 'svelte/store';
import type { client as ClientStore, SupportedPHPVersions, SupportedWordPressVersions } from 'wpgraphql-playground';

export { default as PlaygroundProvider } from './PlaygroundProvider.svelte';

//TODO: rewrite this as a derived store with values insead of stores, and update functions for each of the values.
export type PlaygroundContext = {
	client: typeof ClientStore;
	config: {
		wpUrl: Writable<string>;
		stackVersions: {
			wp: Writable<SupportedWordPressVersions>;
			php: Writable<SupportedPHPVersions>;
		}
		name: Writable<string>;
	}
};
export const CONTEXT_KEY = Symbol('wp-playground-context');

//Creates initial context from URL
export function setPlaygroundContext(builder: () => PlaygroundContext) {
	setContext<PlaygroundContext>(CONTEXT_KEY, builder());
}

//Returns current context
export function getPlaygroundContext(): PlaygroundContext {
	return getContext(CONTEXT_KEY);
}
