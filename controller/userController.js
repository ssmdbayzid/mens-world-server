const User = require("../models/userModel");

exports.postUser = async (req, res) =>{
    
}

// -------- Get all users--------------

exports.getAllUser = async (req, res) =>{
    try {
        const users = await User.find()
        return res.status(200).json(users)
    } catch (error) {
        res.status(401).json({message: error.message})
        
    }
}

// ------- Get User --------------

exports.getUser = async (req, res ) => {
    const userId = req.params.userId;
    try {
        const user = await User.findById(userId)
        if(!user){
            return res.status(400).json("Wrong user")
        }
        res.status(200).json(user)
    } catch (error) {
        return res.status(401).json({message: error.message})
    }
}

//------------ Update User ------------

exports.updateUser = async (req, res)=> {
    const userId = req.params.userId;
    try {
        const user = await User.findById(userId);
        if(!user){
            return res.status(400).json({message: "Wrong user"})
        }

        const updateUser = await User.findByIdAndUpdate(userId, req.body, {
            new: true,
        });

        return res.status(200).json({message: "Update profile successfully", updateUser})
    } catch (error) {
        return res.status(401).json({message: error.message})
    }   
}

// ------- Delete user --------------------

exports.deleteUser = async (req, res) => {
    const userId = req.params.userId;
    console.log(userId)
    try {
        const user = await User.findById(userId)
        if(!user){
            return res.status(400).json({message: "Wrong user data"})
        }
        const deleteUser = await User.findByIdAndDelete(userId);

       return res.status(200).json({message: "User delete successfully", deleteUser})
    } catch (error) {
        return res.status(401).json({message: error.message})
    }
}