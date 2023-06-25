
import { queryParamsProvider } from '$lib/storage/browser';

export function load(event) {
	return queryParamsProvider.routeHandler(event);
}
