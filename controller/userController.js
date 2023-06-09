const userModel = require("../models/userModel");
const User = require("../models/userModel")
const bcrypt = require("bcrypt")

exports.getAllUser = async (req, res) =>{
    try {
        const users = await User.find();

        res.status(200).json(users)
    } catch (error) {
        res.status(401).json({message: "something went wrong"})
    }
    
    res.send("res from user controller")

}

// Get User
exports.getUser  = async (req, res) =>{
    const userId = req.params.userId;
    try {
        const user = await User.findById(userId)

        if(!user){
            return res.status(400).json("Wrong User")
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(401).json({message: "Some things went wrong"})
    }
}

// User Update

exports.updateUser = async (req, res) =>{

    const userId = req.params.userId;
    try {
        const user = await User.findById(userId)
        if(!user){
            return res.status(400).json({message:"Wrong User !!"})
        }
        req.body.password = await bcrypt.hash(req.body.password, 11)

        const userUpdate = await User.findByIdAndUpdate(userId, req.body, {
            new: true,
        })

        res.status(200).json({message: "Profile update successfully", userUpdate})
    } catch (error) {
        res.status(401).json({message: "Something went wrong"})
    }
}

// Delete User

exports.deleteUser = async (req, res)=>{
    const userId = req.params.userId;

    console.log(userId)
    
    try {
        const user = User.findById(userId)
        if(!user){
            res.status(400).json({message: "Wrong User"})
        }
    
        const deleteUser = User.findByIdAndDelete(userId)

        res.status(200).json({message: "User Delete Successfully", deleteUser})
        
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}