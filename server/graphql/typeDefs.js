import { gql } from 'graphql-tag';

//? Conceptos GraphQL, existe dos conceptos Query,
// ? Mutation y Subcription. Consultar y mutar/alterar datos (CRUD op)
// *Mutation -> se utiliza para el cliente pueda enviar datos

export const typeDefs = gql`
  type Query {
    hello: String
    projects: [Project]
    project(_id: ID!): Project
    task(_id: ID!): Task
    tasks: [Task]
  }

  type Mutation {
    createProject(name: String, description: String): Project
    deleteProject(_id: ID!): Project

    createTask(title: String, projectId: ID): Task
    deleteTask(_id: ID!): Task
  }

  type Project {
    _id: ID
    name: String
    description: String
    createdAt: String
    updatedAt: String
  }

  type Task {
    _id: ID
    title: String
    projectId: ID
    createdAt: String
    updatedAt: String
  }
`;
