import { gql } from '@apollo/client/core/core.cjs';

export default gql`
    query WorkQuery($id: ID!) {
        page (
            where: {
                id: $id
            }
        ) {
            title
        }
    }
`;
