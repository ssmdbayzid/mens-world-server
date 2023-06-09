const User = require("../models/userModel");
const jwt = require("jsonwebtoken")

exports.authMiddleware = async (req, res, next)=>{
    try {
        const token = req.headers.authorization;
        
        const sToken = token.split(" ")[1]
        console.log(sToken)
        
        const decode = jwt.verify(sToken, process.env.PRIVATE_KEY);
        console.log(decode)
        
        const id = decode._id;

        
        const user = await User.findById(id);
        if(user){
            req.user = user;    
            console.log(req.user)    
            next()
        }
    } catch (error) {
        res.status(401).json({message: "Authenticate Failed"})
    }
}
