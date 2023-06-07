const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        require:true,
        unique:true,
    },
    email: {
        type: String,
        trim: true,
        require:true,
        unique:true,
    },
    password: {
        type: String,
        trim: true,
        require:true,
        // validate:{
        //     validate: {
        //         minlength: 6,
        //     },
        // },
    },
    profile:{
        type: String,
        default:"avater.png"
    }
})


const userModel = mongoose.model("User", userSchema);

module.exports = userModel;