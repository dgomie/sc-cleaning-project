const typeDefs = `
scalar Date

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

type Package {
  _id: ID!
  package: String!
  price: Float!
  userId: ID!
  recurring: Boolean!
  dateCreated: Date!
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
  getEmployees: [Employee]
  getEmployee(employeeId: String!): Employee
  getPackages: [Package]
  getPackage(packageId: ID!): Package
}

type Mutation {
  createUser(username: String!, firstName: String!, lastName: String!, email: String!, password: String!): Auth
  login(username: String!, password: String!): Auth
  removeUser(userId: ID!): User
  updateUser(userId: ID!, updateData: UpdateUserInput!): User
  employeeLogin(employeeId: String!, password: String!): EmployeeAuth
  createEmployee(employeeId: String!, firstName: String!, lastName: String!, email: String!, password: String!, role: String!): EmployeeAuth
  removeEmployee(_id: ID!): Employee
  updateEmployee(_id: ID!, updateData: UpdateEmployeeInput!): Employee
}
`;

module.exports = typeDefs;
