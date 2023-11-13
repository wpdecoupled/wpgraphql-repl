import type { LoadEvent, Page } from '@sveltejs/kit';
import type { ReplStateValue, StateFromLoad } from '$lib/repl/state';
import type { ValidStorageKeys } from './consts';

export interface StorageProvider {
	routeHandler: (event: LoadEvent) => { state: StateFromLoad };
	updateStorageFromState: (page: Page, state: ReplStateValue) => void;
}

export type ValidStorageKey = (typeof ValidStorageKeys)[number];
