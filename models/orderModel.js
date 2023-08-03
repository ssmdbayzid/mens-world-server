const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    tran_id: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    customer_name : {
        type: String,
        trim:true,
        required: true,        
    },
    customer_email:{
        type: String,
        trim: true,
        required: true,
    },
    customer_address: {
        type: String,
        trim: true,
        required: true,
    },
    customer_mobile: {
        type: String,
        trim: true,
        required: true,
    },
    total_Price: {
        type:Number,
        trim: true,
        requied: true,
    },
    paid: {
        type:Boolean,
        required: true,
    }
})

const orderModel = mongoose.model("Order", orderSchema);

module.exports = orderModel