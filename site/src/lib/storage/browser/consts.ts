import type { ValidStorageKey } from './types';

export const PLAYGROUND_URL_KEY = 'url';
export const PLAYGROUND_WP_VERSION_KEY = 'wp';
export const PLAYGROUND_PHP_VERSION_KEY = 'php';
export const REPL_NAME_KEY = 'name';
export const GRAPHIQL_QUERY_KEY = 'query';
export const GRAPHIQL_VARIABLES_KEY = 'variables';

export const ValidStorageKeys = [
	PLAYGROUND_PHP_VERSION_KEY,
	PLAYGROUND_URL_KEY,
	PLAYGROUND_WP_VERSION_KEY,
	REPL_NAME_KEY,
] as const;

export function isValidStorageKey(key: string): key is ValidStorageKey {
	return (
		key === PLAYGROUND_PHP_VERSION_KEY ||
		key === PLAYGROUND_URL_KEY ||
		key === PLAYGROUND_WP_VERSION_KEY ||
		key === REPL_NAME_KEY
	);
}
