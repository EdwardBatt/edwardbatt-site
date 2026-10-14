import { error } from '@sveltejs/kit';
import { articleFor, articles } from '$lib/pages';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => articles.map((a) => ({ slug: a.slug }));

export const load: PageLoad = ({ params }) => {
	const article = articleFor(params.slug);
	if (!article) error(404, 'Not found');
	return { article };
};
