import { gql } from "$lib/apollo";

export default gql`
	query MicrocopyQuery {
		microcopy(where: { id: "cl81zia9iwxyb0bupye403wec" }) {
			copy
		}
	}
`;
