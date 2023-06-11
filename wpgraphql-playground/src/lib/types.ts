import type { SupportedPHPVersionsList, SupportedWordPressVersionsList } from './consts';

export type SupportedWordPressVersions = (typeof SupportedWordPressVersionsList)[number];

export type SupportedPHPVersions = (typeof SupportedPHPVersionsList)[number];

export type PlaygroundConfig = {
	initUrl: string;
	stackVersions: {
		php: SupportedPHPVersions;
		wp: SupportedWordPressVersions;
	};
};
