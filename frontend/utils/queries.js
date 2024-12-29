import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    getUsers {
      _id
      username
      firstName
      lastName
      email
      password
    }
  }
`;

export const GET_USER = gql`
  query GetUser($userId: ID!) {
    getUser(userId: $userId) {
      _id
      username
      firstName
      lastName
      email
      password
    }
  }
`;

export const GET_EMPLOYEES = gql`
  query GetEmployees {
    getEmployees {
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

export const GET_EMPLOYEE = gql`
  query GetEmployee($employeeId: String!) {
    getEmployee(employeeId: $employeeId) {
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

export const GET_PACKAGES = gql`
  query GetPackages {
    getPackages {
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

export const GET_PACKAGE = gql`
  query GetPackage($packageId: ID!) {
    getPackage(packageId: $packageId) {
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
