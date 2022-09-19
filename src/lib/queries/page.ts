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

    fragment cardFields on Card {
        id
        cols
        title
        description {
            html
        }
    }

    fragment gridFields on Grid {
        id
        body {
            ...cardFields
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
            ...gridFields
            ...cardFields
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
