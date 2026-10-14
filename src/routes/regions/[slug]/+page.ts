import { error } from '@sveltejs/kit';
import { regions } from '$lib/pages';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => regions.map((r) => ({ slug: r.slug }));

export const load: PageLoad = ({ params }) => {
	const region = regions.find((r) => r.slug === params.slug);
	if (!region) error(404, 'Not found');
	return { region };
};
