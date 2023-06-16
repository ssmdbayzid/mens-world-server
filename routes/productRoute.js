const { getAllProducts, postProduct, getProduct, updateProduct, deleteProduct } = require("../controller/productController");
const { authMiddleware } = require("../middleware/auth");

const productRoute = require("express").Router();

//* Get All product & post product
productRoute.get("/", authMiddleware, getAllProducts)
productRoute.post("/", authMiddleware, postProduct);


//* Get Single Product
productRoute.get("/:productId ", authMiddleware, getProduct)

//* Update product & Delete product controller

productRoute.put("/:productId",authMiddleware, updateProduct)
productRoute.delete("/:productId", authMiddleware, deleteProduct)


module.exports = productRoute;