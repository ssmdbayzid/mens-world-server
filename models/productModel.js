const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    // _id: {
    //     type: String,
    //     trim: true,
    //     unique: true,
    // },
    name:{
        type:String,
        trim: true,
        require: true,
        unique: true,
    },
    category: {
        type: String,
        trim: true,
        require: true,
    },
    price:{
        type:Number,
        trim: true,
        require: true,
        unique: true,
    },
    color: {
        type: String,
        trim: true,
        require: true,
    },
    size: {
        type: String,
        trim: true,
        require: true,
    },
    description: {
        type: String,
        trim: true,
        require: true,
        unique: true,
    },
    img: {
        type: String,
        trim: true,
        require: true,
        unique: true,        
    },
    

})

const productModel = mongoose.model("Product", productSchema)

module.exports = productModel