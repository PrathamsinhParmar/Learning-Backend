import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    username : {
      type : String,
      required : true,
      unique : true,
      lowercase : true
    },

    email : {
      type : String,
      required : true,
      unique : true,
      lowercase : true
    },

    password : {
      type : String,
      required : true,
    }
  },
  {
    timestamps : true     // There are 2 timestamps : createdAt & updatedAt
  }
)

export const User = mongoose.model("User", userSchema)    // In MongoDB the name of model : "User" => "users"