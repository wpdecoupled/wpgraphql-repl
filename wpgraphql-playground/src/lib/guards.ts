// Guards

import { SupportedPHPVersionsList, SupportedWordPressVersionsList } from './consts';
import type { SupportedPHPVersions, SupportedWordPressVersions } from './types';

export function isSupportedWordPressVersion(
	version: string
): version is SupportedWordPressVersions {
	return SupportedWordPressVersionsList.includes(version as SupportedWordPressVersions);
}

export function isSupportedPHPVersion(version: string): version is SupportedPHPVersions {
	return SupportedPHPVersionsList.includes(version as SupportedPHPVersions);
}
