import { gql } from '@apollo/client/core/core.cjs';

export default gql`
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
                mimeType
            }
            video {
                url
                alt
            }
        }
    }
`;
