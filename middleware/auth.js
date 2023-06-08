const User = require("../models/userModel");

exports.authMiddleware = async (req, res, next)=>{
    try {
        const token = req.headers.authorization;
        console.log(token)
    } catch (error) {
        res.status(401).json({message: "Authorization Failed"})
    }
}
