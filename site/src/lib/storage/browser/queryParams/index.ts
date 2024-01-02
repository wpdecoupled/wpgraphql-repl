// import { redirect } from '@sveltejs/kit';

import { browser } from '$app/environment';
import { goto } from '$app/navigation';

import type { StorageProvider } from '../types';

import {
	isValidStorageKey,
	PLAYGROUND_PHP_VERSION_KEY,
	PLAYGROUND_URL_KEY,
	PLAYGROUND_WP_VERSION_KEY,
	REPL_NAME_KEY,
	GRAPHIQL_QUERY_KEY,
	GRAPHIQL_VARIABLES_KEY,
} from '../consts';

type StateFromLoad = {
	[PLAYGROUND_PHP_VERSION_KEY]?: string;
	[PLAYGROUND_URL_KEY]?: string;
	[PLAYGROUND_WP_VERSION_KEY]?: string;
	[REPL_NAME_KEY]?: string;
};

const queryParamsProvider: StorageProvider = {
	routeHandler: ({ url }) => {
		const state: StateFromLoad = {};

		for (const [key, value] of url.searchParams.entries()) {
			if (isValidStorageKey(key)) {
				state[key] = value;
			}
		}

		return {
			state,
		};
	},
	updateStorageFromState: (page, state) => {
		const { url, name, wp, php, query, variables } = state;

		if (browser) {
			const newUrl = new URL(page.url);
			let addHistory = false;

			if (newUrl.searchParams.get(PLAYGROUND_WP_VERSION_KEY) !== wp) {
				newUrl.searchParams.set(PLAYGROUND_WP_VERSION_KEY, wp);
				addHistory = true;
			}

			if (newUrl.searchParams.get(PLAYGROUND_PHP_VERSION_KEY) !== php) {
				newUrl.searchParams.set(PLAYGROUND_PHP_VERSION_KEY, php);
				addHistory = true;
			}

			if (newUrl.searchParams.get(PLAYGROUND_URL_KEY) !== url) {
				newUrl.searchParams.set(PLAYGROUND_URL_KEY, url);
			}

			if (newUrl.searchParams.get(REPL_NAME_KEY) !== name) {
				newUrl.searchParams.set(REPL_NAME_KEY, name);
			}

			if (newUrl.searchParams.get(GRAPHIQL_QUERY_KEY) !== query && query != undefined) {
				newUrl.searchParams.set(GRAPHIQL_QUERY_KEY, query);
			}

			if (newUrl.searchParams.get(GRAPHIQL_VARIABLES_KEY) !== variables && variables != undefined) {
				newUrl.searchParams.set(GRAPHIQL_VARIABLES_KEY, variables);
			}

			goto(newUrl, {
				noScroll: true,
				keepFocus: true,
				replaceState: !addHistory,
			});
		}
	},
};
export default queryParamsProvider;
