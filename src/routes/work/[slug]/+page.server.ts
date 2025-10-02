import { error } from '@sveltejs/kit';
import query from '$lib/apollo';

import WORK_QUERY from '$lib/queries/work';

export async function load({ params }) {
	const { data } = await query(WORK_QUERY, {
		slug: params.slug
	});

	if (data) {
		return data.work;
	}

	throw error(404, 'Not found');
}
