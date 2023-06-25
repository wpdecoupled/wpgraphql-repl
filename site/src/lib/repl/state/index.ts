// import { getContext, setContext } from 'svelte';

// import type { ReplContext } from './stores';

export { type ReplState, type ReplStateValue, replState } from './stores';
// export { default as PlaygroundProvider } from './PlaygroundProvider.svelte';
export * from './actions';
export * from './consts';

// export const CONTEXT_KEY = Symbol('wp-playground-context');

// //Creates initial context from URL
// export function setPlaygroundContext(builder: () => ReplContext) {
// 	setContext<ReplContext>(CONTEXT_KEY, builder());
// }

// //Returns current context
// export function getPlaygroundContext(): ReplContext {
// 	return getContext(CONTEXT_KEY);
// }
