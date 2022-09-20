import { gql } from '@apollo/client/core/core.cjs';


export default gql`
    fragment tagGroupFields on TagGroup {
        id
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

    fragment songFields on Song {
        id
        spotifySongId
    }

    fragment textFields on Text {
        id
        body {
           html
        }
    }

    fragment expertiseFields on Expertise {
        id
        title
        image {
            url
            alt
            width
            height
        }
        progress
    }

    fragment cardFields on Card {
        id
        cols
        title
        images {
            url
            alt
            width
            height
        }
        body {
            ...expertiseFields
            ...songFields
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
