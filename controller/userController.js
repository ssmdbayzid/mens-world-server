const User = require("../models/userModel")

exports.getAllUser = async (req, res) =>{
    try {
        const users = await User.find();

        res.status(200).json(users)
    } catch (error) {
        res.status(401).json({message: "something went wrong"})
    }
    
    res.send("res from user controller")

}