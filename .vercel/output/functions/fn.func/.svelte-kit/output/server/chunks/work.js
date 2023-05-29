import { gql } from "@apollo/client/core/core.cjs";
const WORK_QUERY = gql`
	query WorkQuery($slug: String!) {
		work(where: { slug: $slug }) {
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
			}
			video {
				url
				alt
			}
		}
	}
`;
export {
  WORK_QUERY as W
};
