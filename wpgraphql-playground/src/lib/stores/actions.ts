// Actions
import type { PlaygroundClient } from '@wp-playground/client';
import { client as clientStore, wpUrl as wpUrlStore } from './stores';

export function getKey(wpVersion: string, phpVersion: string): string {
	return `${wpVersion}-${phpVersion}`;
}

export function setClient(client: PlaygroundClient): void {
	clientStore.set(client);
}

export function setWpUrl(wpUrl: string): void {
	wpUrlStore.set(wpUrl);
}
