import Project from "../models/Project.js"

export const resolvers = {
    Query  : {
        hello : () => 'Hey!',
        projects : async() => {
            const project = await Project.find()
            return project;
        }

    },

    Mutation : {
        createProject : async(_, { name, description }) => {
            const project = new Project({
                name,
                description
            })

            const savedProject = await project.save()
            return savedProject

        }
    }
}