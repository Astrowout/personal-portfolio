import { e as error } from "../../../../chunks/index.js";
import { q as query } from "../../../../chunks/apollo.js";
import { W as WORK_QUERY } from "../../../../chunks/work.js";
async function load({ params }) {
  const { data } = await query(WORK_QUERY, {
    slug: params.slug
  });
  if (data) {
    return data.work;
  }
  throw error(404, "Not found");
}
export {
  load
};
