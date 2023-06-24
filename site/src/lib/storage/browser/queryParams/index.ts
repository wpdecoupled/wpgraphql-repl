import { redirect } from '@sveltejs/kit';

import { browser } from '$app/environment';
import { goto } from '$app/navigation';

import { StatusCodes } from 'http-status-codes';

import { buildContext, getAllPlaygroundParams, hasAllPlaygroundParams } from './utils';

import type { StorageProvider } from "../types";
import { PLAYGROUND_PHP_VERSION_KEY, PLAYGROUND_URL_KEY, PLAYGROUND_WP_VERSION_KEY, REPL_NAME_KEY } from '../consts';

export const queryParamsProvider: StorageProvider = {
	routeHandler: ({ url }) => {
		if (!hasAllPlaygroundParams(url)) {
			const newURL = getAllPlaygroundParams(url);
			throw redirect(StatusCodes.TEMPORARY_REDIRECT, newURL.toString());
		}

		return {
			buildContext: () => {
				return buildContext(url)
			},
		}
	},
	storageProvider: (page, context) => {
		const {
			config: {
				wpUrl,
				name,
				stackVersions: { wp, php },
			},
		} = context;

		if (browser) {
			const newUrl = new URL(page.url);

			newUrl.searchParams.set(PLAYGROUND_WP_VERSION_KEY, $wp);
			newUrl.searchParams.set(PLAYGROUND_PHP_VERSION_KEY, $php);
			newUrl.searchParams.set(PLAYGROUND_URL_KEY, $wpUrl);

			goto(newUrl, {
				noScroll: true,
				keepFocus: true,
			});
		}

		// Same except does NOT add a history entry
		if (browser) {
			const newUrl = new URL(page.url);

			newUrl.searchParams.set(REPL_NAME_KEY, name);

			goto(newUrl, {
				noScroll: true,
				keepFocus: true,
				replaceState: true,
			});
		}
	}
};
