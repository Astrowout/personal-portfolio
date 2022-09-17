import { gql } from '@apollo/client/core/core.cjs';

export default gql`
    query GlobalQuery {
        global(
            where: {
                id: "cl80kqj8v5rvq0cuiey1q43sr"
            }
        ) {
            spotifySongId
            logo {
                url
                width
                height
            }
            navigation {
                id
                label
                slug
            }
            mainCta {
                id
                label
                slug
            }
        }
    }
`;
