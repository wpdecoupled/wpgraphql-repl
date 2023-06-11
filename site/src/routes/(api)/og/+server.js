import { html as toReactNode } from 'satori-html';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

import { OgImage, InterFont } from '$lib/seo';

const height = 630;
const width = 1200;

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ url }) => {
	const title = url.searchParams.get('title') ?? undefined;

	// @ts-expect-error render not found for some reason even https://kit-docs-demo.vercel.app/docs/component-api/server
	const result = OgImage.render(title);
	const element = toReactNode(`${result.html}<style>${result.css.code}</style>`);
	const svg = await satori(element, {
		fonts: [
			{
				name: 'Inter',
				data: Buffer.from(InterFont),
				style: 'normal',
			},
		],
		height,
		width,
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: width,
		},
	});

	const image = resvg.render();

	return new Response(image.asPng(), {
		headers: {
			'content-type': 'image/png',
		},
	});
};
