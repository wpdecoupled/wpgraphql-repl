import { z } from 'zod';
import type { ValidStorageKey } from './types';
import { PLAYGROUND_PHP_DEFAULT, PLAYGROUND_URL_DEFAULT, PLAYGROUND_WP_DEFAULT, SupportedPHPVersionsList, SupportedWordPressVersionsList } from 'wpgraphql-playground';
import { REPL_NAME_DEFAULT } from '$lib/repl/state';

export const PLAYGROUND_URL_KEY = 'playground_url';
export const PLAYGROUND_WP_VERSION_KEY = 'wp';
export const PLAYGROUND_PHP_VERSION_KEY = 'php';
export const REPL_NAME_KEY = 'name';
export const GRAPHIQL_QUERY_KEY = 'query';
export const GRAPHIQL_VARIABLES_KEY = 'variables';

export const ConfigValidator = z.object({
	PLAYGROUND_URL_KEY: z.string().startsWith('/').default(PLAYGROUND_URL_DEFAULT),
	PLAYGROUND_PHP_VERSION_KEY: z.enum(SupportedPHPVersionsList).default(PLAYGROUND_PHP_DEFAULT),
	PLAYGROUND_WP_VERSION_KEY: z.enum(SupportedWordPressVersionsList).default(PLAYGROUND_WP_DEFAULT),
	REPL_NAME_KEY: z.string().default(REPL_NAME_DEFAULT),
	GRAPHIQL_QUERY_KEY: z.string().default(''),
	GRAPHIQL_VARIABLES_KEY: z.string().default(''),
 })

export const ValidStorageKeys = Object.keys(ConfigValidator);

export function isValidStorageKey(key: string): key is ValidStorageKey {
	return ValidStorageKeys.includes(key as ValidStorageKey);
}
