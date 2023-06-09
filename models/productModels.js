const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    // _id: {
    //     type: String,
    //     trim:true,
    //     require:true,
    //     unique:true,
    // },
    name: {
        type: String,
        trim:true,
        require:true,
        unique:true,
    },
    img: {
        type: String,
        trim:true,
        require:true,
        unique:true,
    },
    description: {
        type: String,
        trim:true,
        require:true,        
    },
    price: {
        type: Number,
        trim:true,
        require:true,        
    },
    catagory:{
        type:String,
        trim:true,
        require: true,
    }
})

const productModel = mongoose.model("Products", productSchema);

module.exports = productModel;