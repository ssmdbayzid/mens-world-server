const { postOrder, updateOrder } = require("../controller/orderController");

const orderRoute = require("express").Router()

orderRoute.post("/", postOrder)
orderRoute.put("/payment/success", updateOrder)


module.exports  = orderRoute;