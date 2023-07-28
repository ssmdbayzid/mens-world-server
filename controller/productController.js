const Product = require("../models/productModel")


// ------------- Create Product ------------------

exports.postProduct = async (req, res)=>{
    try {
        const product = await Product.create(req.body)
        return res.status(200).json({
            message: "Created New Product", product
        })
    } catch (error) {
        return res.status(401).json({message: error.message})
    }
}

// ------------------ Get All Product ------------

exports.getAllProducts = async (req, res)=>{
    try {
        const  products =  await Product.find();
        return res.status(200).json(products)        
    }
    catch (error) {
        return res.status(401).json({message: error.message})
    }
}


//--------------- Get Product ---------------
exports.getProduct = async (req, res)=>{
    const productId = req.params.productId;
    console.log(productId)
    try {
        const product = await Product.findById(productId)
        if(!product){
            return res.status(400).json("Wrong product")            
        }
        return res.status(200).json(product)
    } catch (error) {
        return res.status(401).json({message: error.message})
    }
}

exports.updateProduct = async (req, res) =>{
    const productId = req.params.productId;
    try {
        const product = await Product.findById(productId)
        if(!product){
            return res.status(400).json({message: "Wrong Product"})
        }
        const updateProduct = await Product.findByIdAndUpdate(productId, req.body, {
            new: true,
        })
        return res.status(200).json({message: "Product Updated", updateProduct})
    } catch (error) {
        return res.status(401).json({message: error.message})
    }
}

exports.deleteProduct = async (req, res)=>{
    const productId = req.params.productId;
    try {    
        const product = await Product.findById(productId)   
        if(!product) {
            return res.status(400).json({message: "Unknown Product Data"})
        }

        const deleteProduct = await Product.findByIdAndDelete(productId)
        return res.status(200).json({message: "Product Deleted Successfully", deleteProduct})
    } catch (error) {
        return res.status(401).json({message: error.message})
    }
}