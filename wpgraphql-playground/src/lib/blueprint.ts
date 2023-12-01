import type { Blueprint } from '@wp-playground/client';
import extend from 'just-extend';

import phpDebug from './php/debug.php?raw';

import { PLAYGROUND_WP_DEFAULT, PLAYGROUND_PHP_DEFAULT, PLAYGROUND_URL_DEFAULT } from './consts';

export function makeWpGraphQLBlueprint(customBlueprint: Partial<Blueprint>): Blueprint {
	/// Does this work
	return extend(
		{
			landingPage: PLAYGROUND_URL_DEFAULT,
			preferredVersions: {
				wp: PLAYGROUND_WP_DEFAULT,
				php: PLAYGROUND_PHP_DEFAULT
			},
			steps: [
				{
					step: 'login',
					username: 'admin',
					password: 'password'
				},
				{
					step: 'installPlugin',
					pluginZipFile: {
						resource: 'wordpress.org/plugins',
						slug: 'wp-graphql'
					},
					options: {
						activate: true
					}
				},
				{
					step: 'installPlugin',
					pluginZipFile: {
						resource: 'wordpress.org/plugins',
						slug: 'debug-info'
					}
				},
				{
					step: 'installPlugin',
					pluginZipFile: {
						resource: 'url',
						url: '/wpgraphql-plugin-repl.zip'
					}
				},
				{
					step: 'writeFile',
					path: '/wordpress/debug.php',
					data: phpDebug
				},
				{
					step: 'writeFile',
					path: '/wordpress/debug.php',
					data: phpDebug
				}
			]
		},
		customBlueprint
	);
}
