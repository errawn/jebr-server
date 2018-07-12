export default {
	Query: {
		centers: (parent, args, { models }) => models.Center.findAll()
	}
}