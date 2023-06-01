import mongoose from 'mongoose';
import { Types } from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    projectId: {
      type: Types.ObjectId,
      ref: 'Project',
      required: true,
    },

    status: {
      type: Boolean,
      default: true,
    },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model('Task', taskSchema);