const { signUp } = require("../../controller/authControllers/authControllers")

const signUpRoute = require("express").Router()

signUpRoute.post("/", signUp)

module.exports = signUpRoute;