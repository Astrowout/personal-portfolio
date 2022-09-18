import { gql } from '@apollo/client/core/core.cjs';


export default gql`
    fragment heroFields on Hero {
        id
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

    fragment sectionFields on Section {
        id
        heading {
            subtitle
            title
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
                ...sectionFields
            }
        }
    }
`;
