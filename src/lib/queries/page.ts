import { gql } from '@apollo/client/core/core.cjs';


export default gql`
    fragment tagGroupFields on TagGroup {
        tags
    }

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

    fragment dividerFields on Divider {
        id
    }

    fragment sectionFields on Section {
        id
        heading {
            subtitle
            title
        }
        body {
            ...tagGroupFields
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
                ...dividerFields
                ...sectionFields
            }
        }
    }
`;
