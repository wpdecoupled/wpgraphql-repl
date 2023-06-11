// Consts

import type { PlaygroundConfig, SupportedPHPVersions, SupportedWordPressVersions } from './types';

export const PLAYGROUND_REMOTE_API = 'https://playground.wordpress.net/remote.html';

/**
 * WP Version Stuff
 */

export const SupportedWordPressVersionsList = ['5.9', '6.0', '6.1', '6.2', 'latest'] as const;
export const PLAYGROUND_WP_DEFAULT: SupportedWordPressVersions = 'latest';

/**
 * PHP Version Stuff
 */

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
	'latest'
] as const;

export const PLAYGROUND_PHP_DEFAULT: SupportedPHPVersions = 'latest';

/**
 * WP URL Stuff
 */

export const PLAYGROUND_URL_DEFAULT = '/wp-admin/admin.php?page=graphiql-ide';


/**
 * Playground Config
 */

export const PLAYGROUND_CONFIG_DEFAULT: PlaygroundConfig = {
	initUrl: PLAYGROUND_URL_DEFAULT,
	stackVersions: {
		wp: PLAYGROUND_WP_DEFAULT,
		php: PLAYGROUND_PHP_DEFAULT,
	}
};
