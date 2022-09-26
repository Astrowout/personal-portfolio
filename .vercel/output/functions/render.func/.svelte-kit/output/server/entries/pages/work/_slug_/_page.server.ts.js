import { e as error } from "../../../../chunks/index2.js";
import { q as query } from "../../../../chunks/apollo.js";
import { gql } from "@apollo/client/core/core.cjs";
const WORK_QUERY = gql`
    query WorkQuery($slug: String!) {
        work (
            where: {
                slug: $slug
            }
        ) {
            title
            previewTitle
            url
            description {
                html
            }
            tags {
                id
                label
            }
            images {
                id
                url
                alt
                width
                height
            }
            video {
                url
                alt
            }
        }
    }
`;
const prerender = true;
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
  load,
  prerender
};
