import merge from 'deepmerge';

// Actions to set values in the stores
import {
	isSupportedPHPVersion,
	isSupportedWordPressVersion,
	PLAYGROUND_PHP_DEFAULT,
	PLAYGROUND_URL_DEFAULT,
	PLAYGROUND_WP_DEFAULT,
	type SupportedPHPVersions,
	type SupportedWordPressVersions,
} from 'wpgraphql-playground';
import {
	PLAYGROUND_PHP_VERSION_KEY,
	PLAYGROUND_URL_KEY,
	PLAYGROUND_WP_VERSION_KEY,
	REPL_NAME_KEY,
	ValidStorageKeys,
	type ValidStorageKey,
	StorageValidators,
	ConfigValidator,
} from '$lib/storage/browser';

import { type ReplStateValue, replState } from './stores';

export type StateFromLoad = {
	[key in ValidStorageKey]?: string;
};

export function loadState(state: StateFromLoad) {
	const config = ConfigValidator.parse(state);

	replState.update((current) => {
		return { ...current, config };
	});
}
