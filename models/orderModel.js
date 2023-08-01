const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    tran_id: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    cus_name : {
        type: String,
        trim:true,
        required: true,        
    },
    cus_email:{
        type: String,
        trim: true,
        required: true,
    },
    cus_add1: {
        type: String,
        trim: true,
        required: true,
    },
    cus_phone: {
        type: String,
        trim: true,
        required: true,
    },
    total_amount: {
        type:Number,
        trim: true,
        requied: true,
    }
})

const orderModel = mongoose.model("Order", orderSchema);

module.exports = orderModel