const User = require("../../models/userModel");

exports.signUp = async (req, res, next) =>{
    
    const {username, email, password, profile} = req.body;
    console.log(req.body)
    try {
        
        const user = await User.create({
            username,
            email,
            password,
            profile
        })
        res.status(200).json({message: `Dear Mr. ${username} your account created`, user})
    } catch (error) {
        res.status(401).json({
            message: "Something Went Wrong"
        })
    }
}