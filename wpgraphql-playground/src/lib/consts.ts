// Consts

import type { PlaygroundConfig, SupportedPHPVersions, SupportedWordPressVersions } from './types';

export const PLAYGROUND_REMOTE_API = 'https://playground.wordpress.net/remote.html';

/**
 * WP Version Stuff
 */

export const SupportedWordPressVersionsList = ['6.3', '6.4', '6.5', '6.6', '6.7'] as const;
export const PLAYGROUND_WP_DEFAULT: SupportedWordPressVersions = '6.7';

/**
 * PHP Version Stuff
 */

export const SupportedPHPVersionsList = ['7.4', '8.0', '8.1', '8.2', '8.3'] as const;

export const PLAYGROUND_PHP_DEFAULT: SupportedPHPVersions = '8.3';

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
		php: PLAYGROUND_PHP_DEFAULT
	}
};
