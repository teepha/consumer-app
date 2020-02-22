import mongoose from "mongoose";
import MessageSchema from "./message.schema";

const Message = mongoose.model("Message", MessageSchema);

export default Message;
