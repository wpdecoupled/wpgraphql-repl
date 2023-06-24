import type { PlaygroundContext } from '$lib/repl/state';
import type { LoadEvent } from '@sveltejs/kit';

export interface StorageProvider {
	routeHandler: (event: LoadEvent) => { buildContext: () => PlaygroundContext };
	storageProvider: (page: LoadEvent, context: PlaygroundContext) => void;
}
