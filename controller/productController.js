const Product = require('../models/productModels')

//* Get All Products
exports.getAllProducts = async (req, res) =>{
    try {
        const product = await Product.find();
        return res.status(200).json(product)
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}


//* Get single product 

exports.getProduct = async (req, res)=> {
    const productId = req.params.productId;
    console.log(productId)
    try {
       const product = await Product.findById(productId)
       if(!product){
        return res.status(400).json("Wrong product")
       }
       return res.status(200).json(product)
    } catch (error) {
        return res.status(401).json("some thing wrong")
    }
}
//* Post Product
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

    return res.status(200).json({message: `created new product which id ${product._id}`})
    } catch (error) {
        res.status(401).json({message: error.message})
    }   
}

//* Update Product

exports.updateProduct = async (req, res) => {         
    const productId = req.params.productId;
    
    try {
        const product = await Product.findById(productId)
        console.log(product)
        if(!product){
            return res.statun(400).json({message: "Unknown product"})
        }

        const updateProduct = await Product.findByIdAndUpdate(productId, req.body, {
            new:true,
        })
        console.log(updateProduct)

        return res.status(200).json({message: "Product update successfully", updateProduct})

    } catch (error) {
        return res.status(401).json({message: "Something went wrong"})
    }
}

//* Delete Product

exports.deleteProduct = async (req, res) => {
    const productId = req.params.productId;
    try {
       const product = await Product.findById(productId);
       if(!product){
        return res.status(400).json({message: "Unknown product"})
       }
       const deleteProduct = await Product.findByIdAndDelete(productId)
       return res.status(200).json({message: "Product Delete Successfully", deleteProduct})
    } catch (error) {
        return res.status(401).json({message: error.message})
    }
}


