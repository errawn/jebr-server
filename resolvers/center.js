export default {
	Query: {
		centers: (parent, args, { models }) => models.Center.findAll()
	},
	Mutation: {
		createCenter: async (_, args, { models }) => {
			try {
				const center = await models.Center.create(args) 
				return center
			} catch(err) {
				console.log(err)
			}
		}
	},
}