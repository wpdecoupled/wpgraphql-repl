import { readonly } from 'svelte/store'
import { client as clientStore, wpUrl as wpUrlStore } from './stores';

export * from './actions'

export const client = readonly(clientStore);
export const wpUrl = readonly(wpUrlStore);
