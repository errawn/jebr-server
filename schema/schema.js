export default `
    type Query {
        centers: [Center!]!
    }
    
    type Mutation {
        createCenter(name: String!, lat: Float!, long: Float!): Center!
    }
`