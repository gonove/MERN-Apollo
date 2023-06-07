import Project from '../models/Project.js';
import Task from '../models/Task.js';

export const resolvers = {
  Query: {
    hello: () => 'Hey!',

    projects: async () => await Project.find(),
    project: async (_, _id) => await Project.findById(_id),

    task: async (_, _id) => await Task.findById(_id),
    tasks: async () => await Task.find(),
  },

  Mutation: {
    createProject: async (_, { name, description }) => {
      const project = new Project({
        name,
        description,
      });

      const savedProject = await project.save();
      return savedProject;
    },

    createTask: async (_, { title, projectId }) => {
      const projectFound = await Project.findById(projectId);
      if (!projectFound) throw new Error('Project not found 💔');

      const task = new Task({
        title,
        projectId,
      });

      const taskSaved = await task.save();
      return taskSaved;
    },

    deleteProject: async (_, { _id }) => {
      const projectDeleted = await Project.findByIdAndUpdate(_id, {
        status: false,
      });
      if (!projectDeleted) throw new Error('Project not found 💔');

      return projectDeleted;
    },

    deleteTask: async (_, { _id }) => {
      const taskDeleted = await Task.findByIdAndUpdate(_id, { status: false });
      if (!taskDeleted) throw new Error('Task not found 💔');

      return taskDeleted;
    },

    updateProject: async (_, args) => {
      const updatedProject = await Project.findByIdAndUpdate(args._id, args, {
        new: true, //*Para devolver el elemento actualizado
      });

      if (!updatedProject) {
        throw new Error('Project not found </3');
      }

      return updatedProject;
    },

    updateTask: async (_, args) => {
      const updatedTask = await Task.findByIdAndUpdate(args._id, args, {
        new: true, //*Para devolver el elemento actualizado
      });

      if (!updatedTask) {
        throw new Error('Task not found </3');
      }

      return updatedTask;
    },
  },

  Project: {
    tasks: async (parents) => await Task.find({ projectId: parents._id }),
  },

  Task: {
    project: async (parents) => await Project.findById(parents.projectId),
  },
};
