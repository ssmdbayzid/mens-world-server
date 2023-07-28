const User = require("../models/userModels");

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
