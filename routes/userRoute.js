const { getAllUser,  updateUser, getUser, deleteUser } = require("../controller/userController");
const { authMiddleware } = require("../middleware/auth");

const userRoute = require("express").Router();

userRoute.get("/", authMiddleware, getAllUser);

userRoute.get("/:userId", authMiddleware, getUser)
userRoute.put("/:userId", authMiddleware, updateUser)
userRoute.delete("/:userId", authMiddleware, deleteUser)


module.exports = userRoute;