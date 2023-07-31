const { postOrder } = require("../controller/orderController");

const orderRoute = require("express").Router()

orderRoute.post("/", postOrder)


module.exports  = orderRoute;