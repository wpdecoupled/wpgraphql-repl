// import { redirect } from '@sveltejs/kit';

import { browser } from '$app/environment';
import { goto } from '$app/navigation';

import type { StateFromLoad } from '$lib/repl/state';

import type { StorageProvider } from '../types';
import {
	GRAPHIQL_QUERY_KEY,
	GRAPHIQL_VARIABLES_KEY,
	isValidStorageKey,
	PLAYGROUND_PHP_VERSION_KEY,
	PLAYGROUND_URL_KEY,
	PLAYGROUND_WP_VERSION_KEY,
	REPL_NAME_KEY,
} from '../consts';

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

		if (browser) {
			const newUrl = new URL(page.url);
			let addHistory = false;

			if (newUrl.searchParams.get(PLAYGROUND_WP_VERSION_KEY) !== wpVersion) {
				newUrl.searchParams.set(PLAYGROUND_WP_VERSION_KEY, wpVersion);
				addHistory = true;
			}

			if (newUrl.searchParams.get(PLAYGROUND_PHP_VERSION_KEY) !== phpVersion) {
				newUrl.searchParams.set(PLAYGROUND_PHP_VERSION_KEY, phpVersion);
				addHistory = true;
			}

			if (newUrl.searchParams.get(PLAYGROUND_URL_KEY) !== wpUrl) {
				newUrl.searchParams.set(PLAYGROUND_URL_KEY, wpUrl);
			}

			if (newUrl.searchParams.get(REPL_NAME_KEY) !== name) {
				newUrl.searchParams.set(REPL_NAME_KEY, name);
			}

			if (newUrl.searchParams.get(GRAPHIQL_QUERY_KEY) !== graphiqlQuery) {
				newUrl.searchParams.set(GRAPHIQL_QUERY_KEY, graphiqlQuery);
			}

			if (newUrl.searchParams.get(GRAPHIQL_VARIABLES_KEY) !== graphiqlVariables) {
				newUrl.searchParams.set(GRAPHIQL_VARIABLES_KEY, graphiqlVariables);
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
