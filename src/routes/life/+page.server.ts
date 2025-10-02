import { fail } from '@sveltejs/kit';

import type { Actions } from './$types';
import { PAGE_PASSWORD } from '$env/static/private';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const password = data.get('password');

		if (!password) {
			return fail(400, { missing: true });
		}

		if (password !== PAGE_PASSWORD) {
		    return fail(400, { incorrect: true });
		}

		return {
			success: true,
		};
	}
} satisfies Actions;
