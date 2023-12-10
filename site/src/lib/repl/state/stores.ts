import { writable } from 'svelte/store';
import type { PlaygroundClient } from 'wpgraphql-playground';
import {
	PLAYGROUND_PHP_DEFAULT,
	PLAYGROUND_URL_DEFAULT,
	PLAYGROUND_WP_DEFAULT,
	REPL_NAME_DEFAULT,
} from './consts';

import type { SupportedPHPVersions, SupportedWordPressVersions } from 'wpgraphql-playground';

type StoreAction = { type: string; value?: any };
type StoreReducer<S> = (state: S, action: StoreAction) => S;

function createStore<T>(reducer: StoreReducer<T>, initialState: T) {
	const { subscribe, update } = writable(initialState);
	const dispatch = (action: StoreAction) => update((state) => reducer(state, action));
	return { subscribe, dispatch };
}

export type ReplStateValue = {
	client: PlaygroundClient | null;
	name: string;
	url: string;
	wp_version: SupportedWordPressVersions;
	php_version: SupportedPHPVersions;
};

const default_repl_state: ReplStateValue = {
	client: null,
	url: PLAYGROUND_URL_DEFAULT,
	wp_version: PLAYGROUND_WP_DEFAULT,
	php_version: PLAYGROUND_PHP_DEFAULT,
	name: REPL_NAME_DEFAULT,
};

const repl_reducer: StoreReducer<ReplStateValue> = (state, action) => {
	switch (action.type) {
		case 'set-client':
			return { ...state, client: action?.value };
		case 'load_state':
			return { ...state, ...action.value };
		case 'set-url':
			return { ...state, url: action?.value };
		case 'set-wp-version':
			return { ...state, wp_version: action?.value };
		case 'set-php-version':
			return { ...state, php_version: action?.value };
		case 'update-name':
			return { ...state, name: action?.value };
		default:
			return state;
	}
};

export const repl_state = createStore(repl_reducer, default_repl_state);
