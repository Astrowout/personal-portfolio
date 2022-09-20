import { gql } from '@apollo/client/core/core.cjs';

export default gql`
    query GlobalQuery {
        global (
            where: {
                id: "cl80kqj8v5rvq0cuiey1q43sr"
            }
        ) {
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
