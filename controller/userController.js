const User = require("../models/userModels");

exports.getAllUser = async (req, res) =>{
    try {
        const users = await User.find()
        return res.status(200).json(users)
    } catch (error) {
        res.status(401).json({message: error.message})
        
    }
}

