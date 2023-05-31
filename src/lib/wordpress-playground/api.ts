import { writable, derived, type Readable } from 'svelte/store';
import { getContext, setContext } from 'svelte';
import extend from 'just-extend';

import type { PlaygroundClient, Blueprint } from '@wp-playground/client';

import phpDebug from './php/debug.php?raw';

/**
 * Docs URL: https://wordpress.github.io/wordpress-playground/api/client
 *
 */
export const PLAYGROUND_REMOTE_API = 'https://playground.wordpress.net/remote.html';

/**
 * WP Version Stuff
 */
export const PLAYGROUND_WP_VERSION_PARAM = 'wp';

export const SupportedWordPressVersionsList = ['5.9', '6.0', '6.1', '6.2'] as const;
export type SupportedWordPressVersions = (typeof SupportedWordPressVersionsList)[number];
const PLAYGROUND_WP_DEFAULT: SupportedWordPressVersions = '6.2';

function isSupportedWordPressVersion(version: string): version is SupportedWordPressVersions {
	return SupportedWordPressVersionsList.includes(version as SupportedWordPressVersions);
}

function getWordPressVersion(url: URL): SupportedWordPressVersions {
	const wpVersion = url.searchParams.get(PLAYGROUND_WP_VERSION_PARAM);

	if (!wpVersion || !isSupportedWordPressVersion(wpVersion)) {
		return PLAYGROUND_WP_DEFAULT;
	}

	return wpVersion;
}

/**
 * WP PHP Stuff
 */
export const PLAYGROUND_PHP_VERSION_PARAM = 'php';

export const SupportedPHPVersionsList = [
	'5.6',
	'7.0',
	'7.1',
	'7.2',
	'7.3',
	'7.4',
	'8.0',
	'8.1',
	'8.2',
] as const;

export type SupportedPHPVersions = (typeof SupportedPHPVersionsList)[number];
const PLAYGROUND_PHP_DEFAULT: SupportedPHPVersions = '8.2';

function isSupportedPHPVersion(version: string): version is SupportedPHPVersions {
	return SupportedPHPVersionsList.includes(version as SupportedPHPVersions);
}

function getPHPVersion(url: URL): SupportedPHPVersions {
	const phpVersion = url.searchParams.get(PLAYGROUND_PHP_VERSION_PARAM);

	if (!phpVersion || !isSupportedPHPVersion(phpVersion)) {
		return PLAYGROUND_PHP_DEFAULT;
	}

	return phpVersion;
}

/**
 * WP URL Stuff
 */
const PLAYGROUND_URL_DEFAULT = '/wp-admin/admin.php?page=graphiql-ide';

function getPlaygroundUrl(url: URL) {
	return url.searchParams.get(PLAYGROUND_URL_PARAM) || PLAYGROUND_URL_DEFAULT;
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
 * Utils
 */

export const PLAYGROUND_URL_PARAM = 'playground_url';

type ParamsConfig = {
	[key: string]: {
		default: string;
		init: (url: URL) => string;
		fetch: (context: PlaygroundContext) => Readable<string>;
	};
};

export const PLAYGROUND_PARAMS: ParamsConfig = {
	[PLAYGROUND_WP_VERSION_PARAM]: {
		default: PLAYGROUND_WP_DEFAULT,
		init: getWordPressVersion,
		fetch: (context) => context.config.stackVersions.wp,
	},
	[PLAYGROUND_PHP_VERSION_PARAM]: {
		default: PLAYGROUND_PHP_DEFAULT,
		init: getPHPVersion,
		fetch: (context) => context.config.stackVersions.php,
	},
	[PLAYGROUND_URL_PARAM]: {
		default: PLAYGROUND_URL_DEFAULT,
		init: getPlaygroundUrl,
		fetch: (context) => context.config.wpUrl,
	},
	[REPL_NAME_PARAM]: {
		default: REPL_NAME_DEFAULT,
		init: getReplName,
		fetch: (context) => context.config.name,
	},
};

export function makeWpGraphQLBlueprint(customBlueprint: Partial<Blueprint>): Blueprint {
	return extend(
		{
			landingPage: PLAYGROUND_URL_DEFAULT,
			preferredVersions: {
				wp: PLAYGROUND_WP_DEFAULT,
				php: PLAYGROUND_PHP_DEFAULT,
			},
			steps: [
				{
					step: 'login',
					username: 'admin',
					password: 'password',
				},
				{
					step: 'installPlugin',
					pluginZipFile: {
						resource: 'wordpress.org/plugins',
						slug: 'wp-graphql',
					},
					options: {
						activate: true,
					},
				},
				{
					step: 'installPlugin',
					pluginZipFile: {
						resource: 'wordpress.org/plugins',
						slug: 'debug-info',
					}
				},
				{
					step: 'writeFile',
					path: '/wordpress/debug.php',
					data: phpDebug,
				}
			],
		},
		customBlueprint
	);
}

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

const CONTEXT_KEY = Symbol('wp-playground-context');

function buildContext(url: URL) {
	const playgroundWPVersion = writable<SupportedWordPressVersions>(getWordPressVersion(url));
	const playgroundPHPVersion = writable<SupportedPHPVersions>(getPHPVersion(url));

	const playgroundKey = derived<Readable<string>[], string>(
		[playgroundWPVersion, playgroundPHPVersion],
		(values, set) => {
			set(values.join('-'));
		}
	);

	return {
		client: writable<PlaygroundClient>(null),
		key: playgroundKey,
		config: {
			wpUrl: writable<string>(getPlaygroundUrl(url)),
			stackVersions: {
				wp: playgroundWPVersion,
				php: playgroundPHPVersion,
			},
			name: writable<string>(PLAYGROUND_PARAMS.name.init(url)),
		},
	};
}

export type PlaygroundContext = ReturnType<typeof buildContext>;

//Creates initial context from URL
export function setPlaygroundContext(url: URL) {
	setContext<PlaygroundContext>(CONTEXT_KEY, buildContext(url));
}

//Returns current context
export function getPlaygroundContext(): PlaygroundContext {
	return getContext(CONTEXT_KEY);
}
