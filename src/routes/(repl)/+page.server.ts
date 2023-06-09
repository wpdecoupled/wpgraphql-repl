import { redirect } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';
import type { PageServerLoad } from './$types';

import { getAllPlaygroundParams, hasAllPlaygroundParams } from '$lib/wordpress-playground/api.js';

export const load: PageServerLoad = ({ url }) => {
	if (!hasAllPlaygroundParams(url)) {
		const newURL = getAllPlaygroundParams(url);
		throw redirect(StatusCodes.TEMPORARY_REDIRECT, newURL.toString());
	}
};
