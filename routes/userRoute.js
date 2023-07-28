const { getAllUser, getUser } = require("../controller/userController")

const userRoute = require("express").Router()

userRoute.get("/", getAllUser)
userRoute.get("/:userId", getUser)

module.exports = userRoute;