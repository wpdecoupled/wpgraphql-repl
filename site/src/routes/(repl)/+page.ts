import { redirect } from '@sveltejs/kit';

import { StatusCodes } from 'http-status-codes';

import { getAllPlaygroundParams, hasAllPlaygroundParams } from '$lib/playground';

export function load({ url }) {
	if (!hasAllPlaygroundParams(url)) {
		const newURL = getAllPlaygroundParams(url);
		throw redirect(StatusCodes.TEMPORARY_REDIRECT, newURL.toString());
	}
}
