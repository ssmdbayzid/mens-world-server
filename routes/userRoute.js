const { getAllUser } = require("../controller/userController")

const userRoute = require("express").Router()

userRoute.get("/", getAllUser)

module.exports = userRoute;