const { postOrder, makeOrder } = require("../controller/orderController");

const orderRoute = require("express").Router()

orderRoute.post("/", makeOrder)
orderRoute.post("/payment/success/:id", postOrder)


module.exports  = orderRoute;