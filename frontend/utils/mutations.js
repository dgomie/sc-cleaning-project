import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser(
    $username: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      username: $username
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
        firstName
        lastName
        email
        password
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
        firstName
        lastName
        email
        password
      }
    }
  }
`;

export const REMOVE_USER = gql`
  mutation Mutation($userId: ID!) {
    removeUser(userId: $userId) {
      _id
      username
      firstName
      lastName
      email
      password
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($userId: ID!, $updateData: UpdateUserInput!) {
    updateUser(userId: $userId, updateData: $updateData) {
      _id
      username
      firstName
      lastName
      email
      password
    }
  }
`;

export const EMPLOYEE_LOGIN = gql`
  mutation EmployeeLogin($employeeId: String!, $password: String!) {
    employeeLogin(employeeId: $employeeId, password: $password) {
      token
      employee {
        _id
        employeeId
        firstName
        lastName
        email
        password
        role
      }
    }
  }
`;

export const CREATE_EMPLOYEE = gql`
  mutation CreateEmployee(
    $employeeId: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $role: String!
  ) {
    createEmployee(
      employeeId: $employeeId
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      role: $role
    ) {
      token
      employee {
        _id
        employeeId
        firstName
        lastName
        email
        password
        role
      }
    }
  }
`;

export const REMOVE_EMPLOYEE = gql`
  mutation RemoveEmployee($id: ID!) {
    removeEmployee(_id: $id) {
      _id
      employeeId
      firstName
      lastName
      email
      password
      role
    }
  }
`;

export const UPDATE_EMPLOYEE = gql`
  mutation UpdateEmployee($id: ID!, $updateData: UpdateEmployeeInput!) {
    updateEmployee(_id: $id, updateData: $updateData) {
      _id
      employeeId
      firstName
      lastName
      email
      password
      role
    }
  }
`;

export const CREATE_PACKAGE = gql`
  mutation CreatePackage(
    $package: String!
    $price: Float!
    $userId: ID!
    $recurring: Boolean!
    $dateCreated: Date!
    $scheduleDate: Date!
  ) {
    createPackage(
      package: $package
      price: $price
      userId: $userId
      recurring: $recurring
      dateCreated: $dateCreated
      scheduleDate: $scheduleDate
    ) {
      _id
      package
      price
      userId
      recurring
      dateCreated
      scheduledDate
    }
  }
`;

export const REMOVE_PACKAGE = gql`
  mutation RemovePackage($id: ID!) {
    removePackage(_id: $id) {
      _id
      package
      price
      userId
      recurring
      dateCreated
      scheduledDate
    }
  }
`;

export const UPDATE_PACKAGE = gql`
  mutation UpdatePackage($id: ID!, $updateData: UpdatePackageInput!) {
    updatePackage(_id: $id, updateData: $updateData) {
      _id
      package
      price
      userId
      recurring
      dateCreated
      scheduledDate
    }
  }
`;
