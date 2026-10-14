import { error } from '@sveltejs/kit';
import { caseFor, casePages } from '$lib/pages';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => casePages.map((c) => ({ slug: c.slug }));

export const load: PageLoad = ({ params }) => {
	const found = caseFor(params.slug);
	if (!found) error(404, 'Not found');
	return found;
};
