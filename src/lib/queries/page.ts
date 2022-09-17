import { gql } from '@apollo/client/core/core.cjs';


export default gql`
    fragment heroFields on Hero {
        headline {
            html
        }
        image {
            url
            alt
            width
            height
        }
    }

    query PageQuery($id: ID!) {
        page (
            where: {
                id: $id
            }
        ) {
            enabled
            title
            body {
                ...heroFields
            }
        }
    }
`;
