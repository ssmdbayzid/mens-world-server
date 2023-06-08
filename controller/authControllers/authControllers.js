const User = require("../../models/userModel");
const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")

//* Sign Up
exports.signUp = async (req, res, next) =>{
    req.body.password = await bcrypt.hash(req.body.password, 11);
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

exports.logIn = async (req, res) =>{
    const {username, password} = req.body;

    try {
        const user = await User.findOne({username});

        if(!user){
            return res.status(401).json({message: "Invalid username"})
        }

        const validated = await bcrypt.compare(password, user.password);

        if(!validated){
            res.status(401).json({message: "Password Invalid"})
        }

        const token = await jwt.sign({username, _id:user._id}, process.env.PRIVATE_KEY,{expiresIn: "2h"});

        res.status(200).json({message: "Log In Successfull", token})
    } catch (error) {
        
    }
}