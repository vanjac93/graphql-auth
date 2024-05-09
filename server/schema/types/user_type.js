const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLUnionType } = require("graphql");

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    email: {
      type: GraphQLString
    },
    id: {
      type: GraphQLID
    }
  }
})

module.exports = UserType