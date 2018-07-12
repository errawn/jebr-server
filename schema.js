export default `
	type Centers {
		id: ID
		name: String!
		lat: Float!
		long: Float!
	}

	type Query {
		centers: [Centers!]!
	}	
`;