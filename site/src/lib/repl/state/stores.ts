import { writable } from 'svelte/store';
import type { client } from 'wpgraphql-playground';

import {
	PLAYGROUND_PHP_DEFAULT,
	PLAYGROUND_URL_DEFAULT,
	PLAYGROUND_WP_DEFAULT,
	REPL_NAME_DEFAULT,
} from './consts';

import {
	GRAPHIQL_QUERY_KEY,
	GRAPHIQL_VARIABLES_KEY,
	PLAYGROUND_PHP_VERSION_KEY,
	PLAYGROUND_URL_KEY,
	PLAYGROUND_WP_VERSION_KEY,
	REPL_NAME_KEY
} from '$lib/storage/browser';

import type { SupportedPHPVersions, SupportedWordPressVersions } from 'wpgraphql-playground';

export const replState = writable<ReplStateValue>({
	client: null,
	config: {
		[PLAYGROUND_WP_VERSION_KEY]: PLAYGROUND_WP_DEFAULT,
		[PLAYGROUND_PHP_VERSION_KEY]: PLAYGROUND_PHP_DEFAULT,
		[PLAYGROUND_URL_KEY]: PLAYGROUND_URL_DEFAULT,
		[REPL_NAME_KEY]: REPL_NAME_DEFAULT,
		[GRAPHIQL_QUERY_KEY]: '',
		[GRAPHIQL_VARIABLES_KEY]: '',
	}
})

export type ReplStateValue = {
	client: typeof client | null;
	config: {
		[PLAYGROUND_WP_VERSION_KEY]: SupportedWordPressVersions;
		[PLAYGROUND_PHP_VERSION_KEY]: SupportedPHPVersions;
		[PLAYGROUND_URL_KEY]: string;
		[REPL_NAME_KEY]: string;
		[GRAPHIQL_QUERY_KEY]: string;
		[GRAPHIQL_VARIABLES_KEY]: string;
	}
};

export type ReplState = typeof replState;
