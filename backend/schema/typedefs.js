const typeDefs = `
type Auth {
    token: ID!
    user: User
}

type EmployeeAuth {
  token: ID!
  employee: Employee  
}

type User {
    _id: ID!
    username: String!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
}

type Employee {
  _id: ID!
  employeeId: String!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  role: String!
}

input UpdateEmployeeInput {
  employeeId: String
  firstName: String
  lastName: String
  email: String
  password: String
  role: String
}

input UpdateUserInput {
    username: String
    email: String
    firstName: String
    lastName: String
    password: String
}

type Query {
  getUsers: [User]
  getUser(userId: ID!): User
}

type Mutation {
  createUser(username: String!, firstName: String!, lastName: String!, email: String!, password: String!): Auth
  login(username: String!, password: String!): Auth
  employeeLogin(employeeId: String!, password: String!): EmployeeAuth
  createEmployee(employeeId: String!, firstName: String!, lastName: String!, email: String!, password: String!, role: String!): EmployeeAuth
  removeUser(userId: ID!): User
  updateUser(userId: ID!, updateData: UpdateUserInput!): User
}
`;

module.exports = typeDefs;
