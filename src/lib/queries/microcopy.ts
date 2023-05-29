import { gql } from '@apollo/client/core/core.cjs';

export default gql`
	query MicrocopyQuery {
		microcopy(where: { id: "cl81zia9iwxyb0bupye403wec" }) {
			copy
		}
	}
`;
