import { gql } from "$lib/apollo";

export default gql`
	query GlobalQuery {
		global(where: { id: "cl80kqj8v5rvq0cuiey1q43sr" }) {
			navigation {
				id
				label
				slug
			}
			mainCta {
				id
				label
				url
			}
			footer {
				heading {
					subtitle
					title
				}
				body {
					id
					title
					links {
						label
						url
						external
					}
				}
				credits
			}
		}
		meta(where: { id: "cl8j7gnqa5l9b0duqhizuvp5l" }) {
			description
			socialImage {
				url
				alt
			}
		}
	}
`;
