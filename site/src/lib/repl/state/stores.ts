import { writable } from 'svelte/store';
import type { PlaygroundClient } from 'wpgraphql-playground';
import {
	PLAYGROUND_PHP_DEFAULT,
	PLAYGROUND_URL_DEFAULT,
	PLAYGROUND_WP_DEFAULT,
	REPL_NAME_DEFAULT,
} from './consts';

import type { SupportedPHPVersions, SupportedWordPressVersions } from 'wpgraphql-playground';
import {
	GRAPHIQL_QUERY_KEY,
	GRAPHIQL_VARIABLES_KEY,
	PLAYGROUND_PHP_VERSION_KEY,
	PLAYGROUND_URL_KEY,
	PLAYGROUND_WP_VERSION_KEY,
	REPL_NAME_KEY,
} from '$lib/storage/browser';

type StoreAction = { type: string; value?: any };
type StoreReducer<S> = (state: S, action: StoreAction) => S;

function createStore<T>(reducer: StoreReducer<T>, initialState: T) {
	const { subscribe, update } = writable(initialState);
	const dispatch = (action: StoreAction) => update((state) => reducer(state, action));
	return { subscribe, dispatch };
}

export type ReplStateValue = {
	client: PlaygroundClient | null;
	[REPL_NAME_KEY]: string;
	[PLAYGROUND_URL_KEY]: string;
	[PLAYGROUND_WP_VERSION_KEY]: SupportedWordPressVersions;
	[PLAYGROUND_PHP_VERSION_KEY]: SupportedPHPVersions;
	[GRAPHIQL_QUERY_KEY]?: string;
	[GRAPHIQL_VARIABLES_KEY]?: string;
};

const default_repl_state: ReplStateValue = {
	client: null,
	url: PLAYGROUND_URL_DEFAULT,
	wp: PLAYGROUND_WP_DEFAULT,
	php: PLAYGROUND_PHP_DEFAULT,
	name: REPL_NAME_DEFAULT,
};

//TODO: Replace this with something sensible
export function createGraphiQLUrl(state: ReplStateValue) {
	const url = new URL(state.url, "https://fake.com");
	if(url.searchParams.has('page') && url.searchParams.get('page') === 'graphiql-ide' && url.searchParams.has('query')) {
		state.query && url.searchParams.set('query', state.query);

		return url.pathname + url.search;
	}

	return state.url;
}

const repl_reducer: StoreReducer<ReplStateValue> = (state, action) => {
	switch (action.type) {
		case 'set-client':
			return { ...state, client: action?.value };
		case 'load_state':
			return {
				...state,
				...action.value,
			};
		case 'set-url':
			const new_state = { ...state, url: action?.value };

			if (state.client) {
				state.client.goTo(createGraphiQLUrl(new_state));
			}
			return new_state;
		case 'set-wp-version':
			return { ...state, wp: action?.value };
		case 'set-php-version':
			return { ...state, php: action?.value };
		case 'update-name':
			return { ...state, name: action?.value };
		case 'set-graphiql-context':
			return {
				...state,
				query: action?.value.query?.replace(/\s/g, ""),
				variables: action?.value.variables?.replace(/\s/g, ""),
			};
		default:
			return state;
	}
};

export const repl_state = createStore(repl_reducer, default_repl_state);
