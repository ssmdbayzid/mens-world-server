const { getAllUser } = require("../controller/userController");
const { authMiddleware } = require("../middleware/auth");

const userRoute = require("express").Router();

userRoute.get("/", authMiddleware, getAllUser)

module.exports = userRoute;