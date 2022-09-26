import { error } from "@sveltejs/kit";
import query from "$lib/apollo";

import PAGE_QUERY from "$lib/queries/page";
 
export async function load() {
    const { data } = await query(PAGE_QUERY, {
        id: "cl860de07s3a30bumfxa1kj46",
    });
    
    if (data) {
        return data.page;
    }
 
    throw error(404, 'Not found');
}