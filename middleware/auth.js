const User = require("../models/userModel");
const jwt = require('jsonwebtoken')

exports.authMiddleware = async (req, res, next)=>{
    try {
        
        /*
        const token = req.headers.authorization; 
        if(!token){
            return res.status(401).json({message: "Authorization token missing"})
        }        
        const sToken = token.split(" ")[1]
        const decode = jwt.verify(sToken, process.env.PRIVATE_KEY)
        if(decode){
            console.log(decode)
        }        
        const id = decode._id;        
        const user = await User.findById(id);
        req.user = user;    
        next()        
        */
       next()
       
    } catch (error) {
        console.log(error)
        res.status(401).json({message: "Authenticate Failed"})
    }
}
