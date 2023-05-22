//client for WordPress Playground query API

/**
 * Docs URL: https://wordpress.github.io/wordpress-playground/docs/query-api
 *
 *
 * Option				Default Value				Description
 * ------------------------------------------------------------
 * php					8.0									Loads the specified PHP version. Supported values: 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, latest
 * wp						latest							Loads the specified WordPress version. Supported values: 5.9, 6.0, 6.1, 6.2, latest
 * plugin														Installs the specified plugin. Use the plugin name from the plugins directory URL, e.g. for a URL like https://wordpress.org/plugins/wp-lazy-loading/, the plugin name would be wp-lazy-loading. You can pre-install multiple plugins by saying plugin=coblocks&plugin=wp-lazy-loading&…. Installing a plugin automatically logs the user in as an admin
 * theme														Installs the specified theme. Use the theme name from the themes directory URL, e.g. for a URL like https://wordpress.org/themes/disco/, the theme name would be disco. Installing a theme automatically logs the user in as an admin
 * url					/wp-admin						Load the specified initial page displaying WordPress
 * mode					seamless						Displays WordPress on a full-page or wraps it in a browser UI
 * login				1										Logs the user in as an admin
 * gutenberg-pr											Loads the specified Gutenberg Pull Request
 */

import { writable, type Writable } from 'svelte/store';
import { useBrowserContext } from '@svelteuidev/composables';

import { LatestSupportedPHPVersion } from '@wp-playground/client';

import type { PlaygroundClient, Blueprint, SupportedPHPVersion, supportedWordPressVersion } from '@wp-playground/client';

export const wpVersion: Writable<supportedWordPressVersion> = writable('6.2');
export const phpVersion: Writable<SupportedPHPVersion> = writable(LatestSupportedPHPVersion);

export const playgroundClient: Writable<PlaygroundClient> | Writable<null> = writable(null);

export const wpUrl: Writable<string> = writable('', (set) => {
	useBrowserContext().subscribe((location) => {
		// @ts-expect-error possible undefined doesn't matter
		set(location.pathname + location.search);
	});
});

export const WP_PLAYGROUND_REMOTE_API = 'https://playground.wordpress.net/remote.html';
export const WP_PLAYGROUND_DEFAULT_URL = '/wp-admin/admin.php?page=graphiql-ide';

export const SupportedWordPressVersionsList = ['5.9', '6.0', '6.1', '6.2'];

export function makeWpGraphQLBlueprint({
	landingPage,
	preferredVersions,
}: Required<Pick<Blueprint, 'landingPage' | 'preferredVersions'>>): Blueprint {
	return {
		landingPage,
		preferredVersions,
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
		],
	};
}
