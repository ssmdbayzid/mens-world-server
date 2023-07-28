const { getAllUser, getUser, updateUser } = require("../controller/userController")

const userRoute = require("express").Router()

userRoute.get("/", getAllUser)
userRoute.get("/:userId", getUser)

userRoute.put("/:userId", updateUser)

module.exports = userRoute;