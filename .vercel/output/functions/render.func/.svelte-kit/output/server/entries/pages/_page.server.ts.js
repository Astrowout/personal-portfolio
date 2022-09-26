import { e as error } from "../../chunks/index2.js";
import { q as query } from "../../chunks/apollo.js";
import { P as PAGE_QUERY } from "../../chunks/page.js";
const prerender = true;
async function load() {
  const { data } = await query(PAGE_QUERY, {
    id: "cl860de07s3a30bumfxa1kj46"
  });
  if (data) {
    return data.page;
  }
  throw error(404, "Not found");
}
export {
  load,
  prerender
};
