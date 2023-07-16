// Actions to set values in the stores
import {
	isSupportedPHPVersion,
	isSupportedWordPressVersion,
	PLAYGROUND_PHP_DEFAULT,
	PLAYGROUND_URL_DEFAULT,
	PLAYGROUND_WP_DEFAULT,
	type SupportedPHPVersions,
	type SupportedWordPressVersions,
} from 'wpgraphql-playground';
import {
	PLAYGROUND_PHP_VERSION_KEY,
	PLAYGROUND_URL_KEY,
	PLAYGROUND_WP_VERSION_KEY,
	REPL_NAME_KEY,
	type ValidStorageKey,
} from '$lib/storage/browser';
import { wpUrl, wpVersion, phpVersion, name } from './stores';
import { REPL_NAME_DEFAULT } from './consts';

export function setPlaygroundUrl(url: string) {
	wpUrl.set(url);
}

export function setWordPressVersion(version: SupportedWordPressVersions) {
	wpVersion.set(version);
}

export function setPHPVersion(version: SupportedPHPVersions) {
	phpVersion.set(version);
}

export function setReplName(replName: string) {
	name.set(replName);
}

export type StateFromLoad = {
	[key in ValidStorageKey]?: string;
};

export function loadState(state: StateFromLoad) {
	setWordPressVersion(getWordPressVersion(state));

	setPlaygroundUrl(getPlaygroundUrl(state));

	setPHPVersion(getPHPVersion(state));

	setReplName(getReplName(state));
}

function getReplName(state: StateFromLoad) {
	return state[REPL_NAME_KEY] || REPL_NAME_DEFAULT;
}

function getPHPVersion(state: StateFromLoad): SupportedPHPVersions {
	const phpVersion = state[PLAYGROUND_PHP_VERSION_KEY];

	if (phpVersion && isSupportedPHPVersion(phpVersion)) {
		return phpVersion;
	}

	return PLAYGROUND_PHP_DEFAULT;
}

function getWordPressVersion(state: StateFromLoad): SupportedWordPressVersions {
	const wpVersion = state[PLAYGROUND_WP_VERSION_KEY];

	if (wpVersion && isSupportedWordPressVersion(wpVersion)) {
		return wpVersion;
	}

	return PLAYGROUND_WP_DEFAULT;
}

function getPlaygroundUrl(state: StateFromLoad) {
	const playgroundUrl = state[PLAYGROUND_URL_KEY];

	if (!playgroundUrl) {
		return PLAYGROUND_URL_DEFAULT;
	}

	return playgroundUrl;
}
