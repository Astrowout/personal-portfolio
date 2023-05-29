import { error } from '@sveltejs/kit';

import query from '$lib/apollo';

import GLOBAL_QUERY from '$lib/queries/globals';
import MICROCOPY_QUERY from '$lib/queries/microcopy';

export const prerender = true;

export async function load({ url: { pathname } }) {
	const { data } = await query(GLOBAL_QUERY);
	const {
		data: { microcopy }
	} = await query(MICROCOPY_QUERY);

	if (data) {
		return {
			...data.global,
			t: microcopy ? microcopy.copy : {},
			pathname,
			meta: data.meta
		};
	}

	throw error(404, 'Not found');
}
