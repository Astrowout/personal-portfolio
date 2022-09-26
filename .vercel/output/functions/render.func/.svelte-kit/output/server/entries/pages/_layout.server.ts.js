import { e as error } from "../../chunks/index2.js";
import { q as query } from "../../chunks/apollo.js";
import { gql } from "@apollo/client/core/core.cjs";
const GLOBAL_QUERY = gql`
    query GlobalQuery {
        global (
            where: {
                id: "cl80kqj8v5rvq0cuiey1q43sr"
            }
        ) {
            navigation {
                id
                label
                slug
            }
            mainCta {
                id
                label
                url
            }
            footer {
                heading {
                    subtitle
                    title
                }
                body {
                    id
                    title
                    links {
                        label
                        url
                        external
                    }
                }
                credits
            }
        }
    }
`;
const MICROCOPY_QUERY = gql`
    query MicrocopyQuery {
        microcopy (
            where: {
                id: "cl81zia9iwxyb0bupye403wec"
            }
        ) {
            copy
        }
    }
`;
const prerender = true;
async function load({ url: { pathname } }) {
  const { data } = await query(GLOBAL_QUERY);
  const { data: { microcopy } } = await query(MICROCOPY_QUERY);
  if (data) {
    return {
      ...data.global,
      t: microcopy ? microcopy.copy : {},
      pathname
    };
  }
  throw error(404, "Not found");
}
export {
  load,
  prerender
};
