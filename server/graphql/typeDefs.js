import { gql } from 'graphql-tag'

//? Conceptos GraphQL, existe dos conceptos Query,
// ? Mutation y Subcription. Consultar y mutar/alterar datos (CRUD op)
 // *Mutation -> se utiliza para el cliente pueda enviar datos

export const typeDefs = gql`

    type Query {
        hello : String
    }

    type Mutation {
        createProject(  name : String,
                        description : String

                        ) : Project
    }

    type Project {
        _id : ID
        name : String
        description : String
        createdAt : String
        updatedAt : String
    }

`;