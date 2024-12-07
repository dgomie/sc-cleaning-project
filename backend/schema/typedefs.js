const typeDefs = `
type Auth {
    token: ID!
    user: User
}

type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
}

input UpdateUserInput {
    username: String
    email: String
    password: String
}

type Query {
  getUsers: [User]
  getUser(userId: ID!): User
}

type Mutation {
  createUser(username: String!, email: String!, password: String!): Auth
  login(username: String!, password: String!): Auth
  removeUser(userId: ID!): User
  updateUser(userId: ID!, updateData: UpdateUserInput!): User
}
`;

module.exports = typeDefs;
