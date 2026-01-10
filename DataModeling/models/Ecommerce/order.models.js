import mongoose, { mongo } from "mongoose";

const orderItemSchema = new mongoose.Schema({    
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product"
    },
    quentity : {
        type : Number,
        required : true,
        default : 0
    }
})

const orderSchema = new mongoose.Schema({
    orderItems : {
        type : [orderItemSchema]
    },
    orderPrice : {
        type : Number,
        required : true,
        default : 0
    },
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    address : {
        type : String,
        required : true
    },
    status : {
        type : String,
        enum : ["PENDING", "DELIVERED", "CANCELLED"],
        required : true,
        default : "PENDING"
    }
}, {timestamps : true})

export const Order = mongoose.model("Order", orderSchema)