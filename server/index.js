const { ApolloServer, makeExecutableSchema } = require('apollo-server');

const post = require('./schemas/post')
const comment = require('./schemas/comment')
const todo = require('./schemas/todo')
const user = require('./schemas/user')

const typeDefs = `
  type Query
  type Mutation

  type Info {
    success: Boolean!
    message: String
  }
`

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, post.typeDefs, comment.typeDefs, todo.typeDefs, user.typeDefs],
  resolvers: [post.resolvers, comment.resolvers, todo.resolvers, user.resolvers]
})

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    return {
      user: null
    }
  },
});

// The `listen` method launches a web server.
server.listen(80).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
