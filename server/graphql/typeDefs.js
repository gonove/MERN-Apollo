import { gql } from 'graphql-tag'

//? Conceptos GraphQL, existe dos conceptos Query,
// ? Mutation y Subcription. Consultar y mutar/alterar datos (CRUD op)
 // *Mutation -> se utiliza para el cliente pueda enviar datos

export const typeDefs = gql`

    type Query {
        hello : String
        projects : [Project]
        tasks : [Task]
    }

    type Mutation {
        createProject(  name : String,
                        description : String

        ) : Project

        createTask(
            title : String,
            projectId : ID

        ) : Task
    }

    type Project {
        _id : ID
        name : String
        description : String
        createdAt : String
        updatedAt : String
    }

    type Task {
        _id : ID
        title : String
        projectId : ID
        createdAt : String
        updatedAt : String
    }

`;