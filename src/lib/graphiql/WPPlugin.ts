import * as React from 'react';
import ReactSvelte from 'react-svelte';
import { SiWordpress } from 'react-icons/si';
import WpPluginContent from './WPPluginContent.svelte';
import { wpPluginConfigStore } from '$lib/stores';
import WpGraphQLReplPlugin from '$lib/wpgraphql-repl/wordpress-repl.php?raw';

import type { Blueprint } from '@wp-playground/client';

export const wpPlugin = {
	title: 'WordPress Config',
	icon: SiWordpress,
	content: () =>
		React.createElement(ReactSvelte, {
			this: WpPluginContent,
		}),
};

import type { GraphiQLProps } from 'graphiql';
import type { PlaygroundClient } from '@wp-playground/client';

export function makeFetcher(client: PlaygroundClient): GraphiQLProps['fetcher'] {
	return async (graphQLParams, opts) => {
		const resp = await client.request({
			method: 'POST',
			url: '/index.php?graphql',
			headers: {
				'content-type': 'application/json',
				...opts?.headers,
			},
			body: JSON.stringify(graphQLParams),
		});

		if (resp.httpStatusCode !== 200) {
			throw Error(resp.errors);
		}

		const content_type = resp.headers['content-type'];

		if (!content_type?.includes('application/json')) {
			throw new Error(`Expected JSON response, got ${content_type}`);
		}

		return resp.json();
	};
}

export async function setupWPPlayground(client: PlaygroundClient): Promise<void> {
	console.log('Setting up WP Playground');
	client.onNavigation((url: string) =>
		wpPluginConfigStore.update((config) => {
			config.url = url;
			return config;
		})
	);
}

console.log(WpGraphQLReplPlugin);

export const wpGraphQLBlueprint: Blueprint = {
	landingPage: '/wp-admin/',
	preferredVersions: {
		php: 'latest',
		wp: 'latest',
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
		{
			step: 'installPlugin',
			pluginZipFile: {
				resource: 'literal',
				contents: WpGraphQLReplPlugin,
				name: 'wpgraphql-repl.php',
			},
			options: {
				activate: true,
			},
		},
	],
};
