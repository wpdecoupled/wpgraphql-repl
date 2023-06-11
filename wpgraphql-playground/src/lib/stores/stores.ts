import { writable } from 'svelte/store';

import type { PlaygroundClient } from '@wp-playground/client';

export const key = writable<string>('');

export const client = writable<PlaygroundClient>(null);
export const wpUrl = writable<string>('');
