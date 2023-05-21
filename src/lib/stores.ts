import { writable, type Writable } from "svelte/store";
import type { PlaygroundClient } from "@wp-playground/client";

export const wpPluginConfigStore = writable({
	url: '',
});

export const wpPlaygroundClientStore: Writable<PlaygroundClient> | Writable<null> = writable(null);
