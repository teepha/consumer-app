import mongoose from "mongoose";

const Schema = mongoose.Schema;
const MessageSchema = new Schema({
  customer_id: {
    type: String,
    required: true
  },
  contact_list: {
    type: String,
    required: true
  },
  task_id: {
    type: String,
    required: true,
    unique: true
  },
  message: {
    type: String,
    required: true
  }
});

export default MessageSchema;
