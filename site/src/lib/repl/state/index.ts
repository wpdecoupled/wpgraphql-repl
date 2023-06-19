import { getContext, setContext } from 'svelte';
import { buildContext } from '$lib/storage/browser/queryParams';

export { default as PlaygroundProvider } from './PlaygroundProvider.svelte';

export type PlaygroundContext = ReturnType<typeof buildContext>;
export const CONTEXT_KEY = Symbol('wp-playground-context');

//Creates initial context from URL
export function setPlaygroundContext(url: URL) {
	setContext<PlaygroundContext>(CONTEXT_KEY, buildContext(url));
}

//Returns current context
export function getPlaygroundContext(): PlaygroundContext {
	return getContext(CONTEXT_KEY);
}
