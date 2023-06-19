export { default as SearchParamsStorageProvider } from './SearchParamsStorageProvider.svelte';

import type { PlaygroundContext } from '$lib/repl/state';
import { writable, type Readable } from 'svelte/store';

import {
	client as clientStore,
	isSupportedPHPVersion,
	isSupportedWordPressVersion,
	PLAYGROUND_WP_DEFAULT,
	PLAYGROUND_URL_DEFAULT,
	PLAYGROUND_PHP_DEFAULT,
} from 'wpgraphql-playground';

import type { SupportedPHPVersions, SupportedWordPressVersions } from 'wpgraphql-playground';

/**
 * WP URL Stuff
 */

export const PLAYGROUND_URL_PARAM = 'playground_url';

function getPlaygroundUrl(url: URL) {
	const playgroundUrl = url.searchParams.get(PLAYGROUND_URL_PARAM);

	if (!playgroundUrl) {
		return PLAYGROUND_URL_DEFAULT;
	}

	return playgroundUrl;
}

/**
 * WP Version Stuff
 */
export const PLAYGROUND_WP_VERSION_PARAM = 'wp';

function getWordPressVersion(url: URL): SupportedWordPressVersions {
	const wpVersion = url.searchParams.get(PLAYGROUND_WP_VERSION_PARAM);

	if (wpVersion && isSupportedWordPressVersion(wpVersion)) {
		return wpVersion;
	}

	return PLAYGROUND_WP_DEFAULT;
}

/**
 * PHP Version Stuff
 */

export const PLAYGROUND_PHP_VERSION_PARAM = 'php';

function getPHPVersion(url: URL): SupportedPHPVersions {
	const phpVersion = url.searchParams.get(PLAYGROUND_PHP_VERSION_PARAM);

	if (phpVersion && isSupportedPHPVersion(phpVersion)) {
		return phpVersion;
	}

	return PLAYGROUND_PHP_DEFAULT;
}

/**
 * WP Name Stuff
 */
export const REPL_NAME_PARAM = 'name';
export const REPL_NAME_DEFAULT = 'Hello World';

export function getReplName(url: URL) {
	return url.searchParams.get(REPL_NAME_PARAM) || REPL_NAME_DEFAULT;
}

/**
 * Query Param Utils
 */
type ParamsConfig = {
	[key: string]: {
		init: (url: URL) => string;
		fetch: (context: PlaygroundContext) => Readable<string>;
	};
};

export const PLAYGROUND_PARAMS: ParamsConfig = {
	[PLAYGROUND_WP_VERSION_PARAM]: {
		init: getWordPressVersion,
		fetch: (context) => context.config.stackVersions.wp,
	},
	[PLAYGROUND_PHP_VERSION_PARAM]: {
		init: getPHPVersion,
		fetch: (context) => context.config.stackVersions.php,
	},
	[PLAYGROUND_URL_PARAM]: {
		init: getPlaygroundUrl,
		fetch: (context) => context.config.wpUrl,
	},
	[REPL_NAME_PARAM]: {
		init: getReplName,
		fetch: (context) => context.config.name,
	},
};

//Checks if all required params are present in URL
export function hasAllPlaygroundParams(url: URL) {
	for (const param of Object.keys(PLAYGROUND_PARAMS)) {
		if (!url.searchParams.has(param)) {
			return false;
		}
	}

	return true;
}

//Reads from URL and sets default values for missing params
export function getAllPlaygroundParams(url: URL) {
	const newURL = new URL(url);

	for (const [param, config] of Object.entries(PLAYGROUND_PARAMS)) {
		newURL.searchParams.set(param, config.init(url));
	}

	return newURL;
}

export function buildContext(url: URL) {
	const playgroundWPVersion = writable<SupportedWordPressVersions>(getWordPressVersion(url));
	const playgroundPHPVersion = writable<SupportedPHPVersions>(getPHPVersion(url));

	return {
		client: clientStore,
		config: {
			wpUrl: writable<string>(getPlaygroundUrl(url)),
			stackVersions: {
				wp: playgroundWPVersion,
				php: playgroundPHPVersion,
			},
			name: writable<string>(getReplName(url)),
		},
	};
}
