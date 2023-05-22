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

const WP_PLAYGROUND_API_URL = 'https://playground.wordpress.net/';

type WPPlaygroundOptions = {
	php?: WPPlaygroundPhpVersion;
	wp?: WPPlaygroundWpVersion;
	plugin?: string[];
	theme?: string[];
	url?: string;
	mode?: WPPlaygroundMode;
	login?: number;
	gutenbergPr?: string;
};

type WPPlaygroundPhpVersion =
	| '5.6'
	| '7.0'
	| '7.1'
	| '7.2'
	| '7.3'
	| '7.4'
	| '8.0'
	| '8.1'
	| '8.2'
	| 'latest';
type WPPlaygroundWpVersion = '5.9' | '6.0' | '6.1' | '6.2' | 'latest';
type WPPlaygroundMode = 'seamless' | 'browser';

export const playgroundOptionsStore: Writable<WPPlaygroundOptions> = writable({
	php: 'latest',
	wp: 'latest',
	plugin: ['wp-graphql'],
	theme: [],
	url: '/wp-admin/admin.php?page=graphiql-ide',
	mode: 'seamless',
	login: 1,
});

function getUrlWithOptions(url: string, options: WPPlaygroundOptions): URL {
	const newUrl = new URL(url);
	for (const [key, value] of Object.entries(options)) {
		if (value && !Array.isArray(value)) {
			newUrl.searchParams.set(key, value.toString());
		} else if (value && Array.isArray(value)) {
			value.forEach((item) => {
				newUrl.searchParams.append(key, item.toString());
			});
		}
	}
	return newUrl;
}

export function getWpPlaygroundUrl(options: WPPlaygroundOptions): URL {
	return getUrlWithOptions(WP_PLAYGROUND_API_URL, options);
}

export function startPlayground(element: HTMLIFrameElement, options: WPPlaygroundOptions = {}) {
	// element.addEventListener("load", function() {

	// });

	const url = getWpPlaygroundUrl(options);
	element.src = url.toString();
}
