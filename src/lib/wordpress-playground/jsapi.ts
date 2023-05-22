import type { Blueprint } from '@wp-playground/client';

export const wpGraphQLBlueprint: Blueprint = {
	landingPage: '/wp-admin/admin.php?page=graphiql-ide',
	preferredVersions: {
		php: 'latest',
		wp: 'latest',
	},
	steps: [
		{
			step: 'login',
			username: 'admin',
			password: 'password',
		},
		{
			step: 'installPlugin',
			pluginZipFile: {
				resource: 'wordpress.org/plugins',
				slug: 'wp-graphql',
			},
			options: {
				activate: true,
			},
		},
	],
};
