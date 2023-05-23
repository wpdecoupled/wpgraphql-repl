<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	import { startPlaygroundWeb, type PlaygroundClient } from '@wp-playground/client';

	import {
		WP_PLAYGROUND_DEFAULT_URL,
		makeWpGraphQLBlueprint,
		WP_PLAYGROUND_REMOTE_API,
		playgroundClient,
		getWordPressVersion,
		getPHPVersion,
		WP_PLAYGROUND_URL_PARAM,
		getPlaygroundUrl,
	} from '$lib/wordpress-playground';

	let wppFrame: HTMLIFrameElement;

	$: {
		if (browser) {
			const workingWpVersion = getWordPressVersion($page.url);
			const workingPhpVersion = getPHPVersion($page.url);

			const blueprint = makeWpGraphQLBlueprint({
				landingPage: getPlaygroundUrl($page.url) ?? WP_PLAYGROUND_DEFAULT_URL,
				preferredVersions: {
					wp: workingWpVersion,
					php: workingPhpVersion,
				},
			});

			const setupPlayground = async () => {
				const client: PlaygroundClient = await startPlaygroundWeb({
					iframe: wppFrame,
					remoteUrl: WP_PLAYGROUND_REMOTE_API,
					blueprint,
				});

				await client.isReady();

				playgroundClient.set(client);

				client.onNavigation((url: string) => {
					/**
					 * WARNING: Mutating the URL object directly will not trigger a reactivity update
					 * This is due to the faact that we're mutating the object directly, so when reactivity
					 * compares the old and new values, they are the same.
					 *
					 * For this parameter, in this use case, this is what we want. But this is probably not a recommended practice.
					 * If we find a better method to prevent render loops, we should use it
					 */
					$page.url.searchParams.set(WP_PLAYGROUND_URL_PARAM, url);

					goto($page.url, {
						noScroll: true,
						keepFocus: true,
					});
				});
			};

			setupPlayground();
		}
	}
</script>

<iframe
	bind:this={wppFrame}
	id="wp"
	width="100%"
	height="100%"
	title="WordPress Playground Instance"
/>

<style>
	iframe {
		border: none;
	}
</style>
