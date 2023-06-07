const Product = require('../models/productModels')

// Get All Products
exports.getAllProducts = async (req, res) =>{
    try {
        const product = await Product.find();
        res.status(200).json({product})
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

// Post Product
exports.postProduct= async (req, res)=>{

    try {
        const {name, img, description, price, catagory} = req.body;

    const product = await Product.create({
        name,
        img,
        description,
        price,
        catagory,
    })

    res.status(200).json({message: `created new product which id ${product._id}`})
    } catch (error) {
        res.status(401).json({message: error.message})
    }   
}
