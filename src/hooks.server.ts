import { sequence } from '@sveltejs/kit/hooks';
import * as Sentry from '@sentry/sveltekit';
import { prepareStylesSSR } from '@svelteuidev/core';

Sentry.init({
	//dsn set in environment variables in production
	tracesSampleRate: 1,
});

export const handle = sequence(Sentry.sentryHandle(), prepareStylesSSR);
export const handleError = Sentry.handleErrorWithSentry();
