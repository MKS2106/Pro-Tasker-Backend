import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  status:{
    type: String,
    enum: {
        values: ['in-progress', 'to-do', 'done'],
        mesage: '{VALUE} is not a supported status'

    },
    default: 'to-do'
  },
  project: {
  type: Schema.Types.ObjectId,
  ref: 'Project',
  required: true,
}
});

const Task = mongoose.model("Task", taskSchema);

export default Task;