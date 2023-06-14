import type { SvelteToastOptions } from '@zerodevx/svelte-toast/stores';
import { toast } from '@zerodevx/svelte-toast';
import extend from 'just-extend';

export function mergeDefaultToastConfig(customConfig: SvelteToastOptions): SvelteToastOptions {
	return extend(
		{
			initial: 0,
			next: 1,
		},
		customConfig
	)
}

export function notify(message: string, config?: SvelteToastOptions) {
	return toast.push(message, extend(
		mergeDefaultToastConfig({
			duration: 3000,
		}),
		config
	));
}

export function loading(message: string, config?: SvelteToastOptions) {
	const id = toast.push(message, extend(
		mergeDefaultToastConfig({
			dismissable: false,
		}),
		config
	));

	return {
		update: (opts: SvelteToastOptions) => toast.set(id, opts),
		complete: (opts?: SvelteToastOptions) => toast.set(
			extend({
				dismissable: true,
				duration: 3000,
				next: 1,
			},
				opts
			))
	}
}
