import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status : {
      type : Boolean,
      default : true,
    }
  },

  {
    timestamps: true,
  }
);

ProjectSchema.methods.toJSON = function () {
  const { __v, ...resto } = this.toObject();
  return resto;
};

export default mongoose.model('Project', ProjectSchema);
