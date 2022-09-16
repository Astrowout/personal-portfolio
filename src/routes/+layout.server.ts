import { error } from '@sveltejs/kit';
import query from "$lib/apollo";

import GLOBAL_QUERY from "../queries/globals";

export const prerender = true;
 
export async function load() {
    const { data } = await query(GLOBAL_QUERY);
    
    if (data) {
        return data.global;
    }
 
    throw error(404, 'Not found');
}