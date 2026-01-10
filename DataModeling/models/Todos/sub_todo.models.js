import mongoose, { mongo } from "mongoose"

const subTodoSchema = new mongoose.Schema({
  title : {
    type : String,
    rquired : true,
  },
  content : {
    type : String,
    required : true
  },
  complete : {
    type : Boolean,
    default : false
  },
  createdBy : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  }
}, {timestamps : true})

export const SubTodo = mongoose.model("SubTodo", subTodoSchema)    // In MongoDB ; SubTodo => subtodos