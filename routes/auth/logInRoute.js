const { logIn } = require("../../controller/authControllers/authControllers");

const logInRoute = require("express").Router()

// logInRoute.post("/", )
logInRoute.post("/", logIn)

module.exports = logInRoute;