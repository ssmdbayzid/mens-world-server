const { getAllProducts, getProduct, updateProduct, deleteProduct, postProduct } = require("../controller/productController")

const productRoute = require("express").Router()

//----------- Create Product ----------------------
productRoute.post("/", postProduct)

// ----------- Get All Product ----------------------
productRoute.get("/", getAllProducts )

// -----------  Get Product -------------------------
productRoute.get("/:productId", getProduct)

// --------------  Update Product -------------------
productRoute.put("/:productId", updateProduct )

//---------------- Delete Product -------------------
productRoute.delete("/:productId", deleteProduct )

module.exports = productRoute;