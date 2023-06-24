
import { queryParamsProvider } from '$lib/storage/browser/queryParams/index.js';

export function load(event) {
	return queryParamsProvider.routeHandler(event);
}
