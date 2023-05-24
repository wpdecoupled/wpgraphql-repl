import extend from 'just-extend';

/**
 * Docs URL: https://wordpress.github.io/wordpress-playground/api/client
 *
 */

import { writable } from 'svelte/store';

import type { PlaygroundClient, Blueprint } from '@wp-playground/client';

export const SupportedWordPressVersionsList = ['5.9', '6.0', '6.1', '6.2'] as const;
export type SupportedWordPressVersion = (typeof SupportedWordPressVersionsList)[number];
export const LatestSupportedWordPressVersion: SupportedWordPressVersion = '6.2';

export function isSupportedWordPressVersion(version: string): version is SupportedWordPressVersion {
	return SupportedWordPressVersionsList.includes(version as SupportedWordPressVersion);
}

export function getWordPressVersion(url: URL): SupportedWordPressVersion {
	const wpVersion = url.searchParams.get(WP_PLAYGROUND_WP_VERSION_PARAM);

	if (!wpVersion || !isSupportedWordPressVersion(wpVersion)) {
		return LatestSupportedWordPressVersion;
	}

	return wpVersion;
}

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

export type SupportedPHPVersion = (typeof SupportedPHPVersionsList)[number];
export const LatestSupportedPHPVersion: SupportedPHPVersion = '8.2';

function isSupportedPHPVersion(version: string): version is SupportedPHPVersion {
	return SupportedPHPVersionsList.includes(version as SupportedPHPVersion);
}

export function getPHPVersion(url: URL): SupportedPHPVersion {
	const phpVersion = url.searchParams.get(WP_PLAYGROUND_PHP_VERSION_PARAM);

	if (!phpVersion || !isSupportedPHPVersion(phpVersion)) {
		return LatestSupportedPHPVersion;
	}

	return phpVersion;
}

export const playgroundClient = writable<PlaygroundClient>(null);

export const WP_PLAYGROUND_REMOTE_API = 'https://playground.wordpress.net/remote.html';

export const WP_PLAYGROUND_DEFAULT_URL = '/wp-admin/admin.php?page=graphiql-ide';

export const WP_PLAYGROUND_URL_PARAM = 'playground_url';
export const WP_PLAYGROUND_WP_VERSION_PARAM = 'wp';
export const WP_PLAYGROUND_PHP_VERSION_PARAM = 'php';

export function getPlaygroundUrl(url: URL) {
	const playground_url = url.searchParams.get(WP_PLAYGROUND_URL_PARAM);

	if (!playground_url) {
		return WP_PLAYGROUND_DEFAULT_URL;
	}

	return playground_url;
}

export function makeWpGraphQLBlueprint(customBlueprint: Partial<Blueprint>): Blueprint {
	return extend(
		{
			landingPage: WP_PLAYGROUND_DEFAULT_URL,
			preferredVersions: {
				wp: LatestSupportedWordPressVersion,
				php: LatestSupportedPHPVersion,
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
			],
		},
		customBlueprint
	);
}

export function generatePlaygroundKey(url: URL) {
	const wpVersion = getWordPressVersion(url);
	const phpVersion = getPHPVersion(url);

	return `${wpVersion}-${phpVersion}`;
}

export function hasAllPlaygroundParams(url: URL) {
	return (
		url.searchParams.has(WP_PLAYGROUND_WP_VERSION_PARAM) &&
		url.searchParams.has(WP_PLAYGROUND_PHP_VERSION_PARAM) &&
		url.searchParams.has(WP_PLAYGROUND_URL_PARAM)
	);
}

export function getAllPlaygroundParams(url: URL) {
	const newURL = new URL(url);
	const wpVersion = getWordPressVersion(url);
	const phpVersion = getPHPVersion(url);
	const playgroundUrl = getPlaygroundUrl(url);

	newURL.searchParams.set(WP_PLAYGROUND_WP_VERSION_PARAM, wpVersion);
	newURL.searchParams.set(WP_PLAYGROUND_PHP_VERSION_PARAM, phpVersion);
	newURL.searchParams.set(WP_PLAYGROUND_URL_PARAM, playgroundUrl);

	return newURL;
}
