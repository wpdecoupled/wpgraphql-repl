import { writable, derived } from 'svelte/store';
import { client } from 'wpgraphql-playground';

import {
	PLAYGROUND_PHP_DEFAULT,
	PLAYGROUND_URL_DEFAULT,
	PLAYGROUND_WP_DEFAULT,
	REPL_NAME_DEFAULT,
} from './consts';

import type { SupportedPHPVersions, SupportedWordPressVersions } from 'wpgraphql-playground';

export const wpUrl = writable<string>(PLAYGROUND_URL_DEFAULT);
export const wpVersion = writable<SupportedWordPressVersions>(PLAYGROUND_WP_DEFAULT);
export const phpVersion = writable<SupportedPHPVersions>(PLAYGROUND_PHP_DEFAULT);
export const name = writable<string>(REPL_NAME_DEFAULT);

export const replState = derived<
	[typeof wpUrl, typeof wpVersion, typeof phpVersion, typeof name, typeof client],
	ReplStateValue
>(
	[wpUrl, wpVersion, phpVersion, name, client],
	([$wpUrl, $wpVersion, $phpVersion, $name, $client]) => {
		return {
			client: $client,
			name: $name,
			wpUrl: $wpUrl,
			wpVersion: $wpVersion,
			phpVersion: $phpVersion,
		};
	}
);

export type ReplStateValue = {
	client: typeof client | null;
	name: string;
	wpUrl: string;
	wpVersion: SupportedWordPressVersions;
	phpVersion: SupportedPHPVersions;
};

export type ReplState = typeof replState;
