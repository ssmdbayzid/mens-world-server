const { getAllProducts, postProduct } = require("../controller/productController");

const productRoute = require("express").Router();

//* Get product & Post product controller

productRoute.route("/").get(getAllProducts).post(postProduct);

//* Update product & Delete product controller

productRoute.route("/:id").put(getAllProducts).delete(postProduct);


module.exports = productRoute;