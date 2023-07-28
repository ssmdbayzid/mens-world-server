const { getAllUser, getUser, updateUser, deleteUser } = require("../controller/userController")

const userRoute = require("express").Router()

userRoute.get("/", getAllUser);
userRoute.get("/:userId", getUser);

userRoute.put("/:userId", updateUser);
userRoute.delete("/:userId", deleteUser);





module.exports = userRoute;