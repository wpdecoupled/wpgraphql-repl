import { redirect } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';

import { WP_PLAYGROUND_DEFAULT_URL } from '$lib/wordpress-playground/api';

import type { LayoutLoad } from './$types';

export const load = (({ params }) => {
	if (params.path === '') {
		throw redirect(StatusCodes.TEMPORARY_REDIRECT, WP_PLAYGROUND_DEFAULT_URL);
	}
}) satisfies LayoutLoad;
