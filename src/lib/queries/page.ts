import { gql } from '@apollo/client/core/core.cjs';


export default gql`
    fragment workGroupFields on WorkGroup {
        id
        works {
            id
            title
            slug
            cols
            image {
                url
                alt
                width
                height
            }
        }
    }

    fragment tagGroupFields on TagGroup {
        id
        tags {
            id
            label
        }
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

    fragment statFields on Stat {
        id
        number
        description {
            html
        }
    }

    fragment textFields on Text {
        id
        content {
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
            ...textFields
            ...expertiseFields
            ...songFields
            ...statFields
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
        compact
        heading {
            subtitle
            title
        }
        body {
            ...tagGroupFields
            ...gridFields
            ...cardFields
            ...workGroupFields
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
