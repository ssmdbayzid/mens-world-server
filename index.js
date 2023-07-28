const express = require('express');
const app = express()
const port = process.env.PORT || 5000
const bodyParser = require("body-parser")
const connectDB = require("./config/connectDB")
const cors = require("cors");
const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
require("dotenv").config()


// ------------ Middleware----------
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())




//----------- Api calls section

app.use("/users", userRoute)
app.use("/products", productRoute)

app.get("/", (req, res)=> {
    res.send("Server error find")
})

app.listen(port, ()=> {
    console.log(`Server error running with, ${port}`)
    connectDB()
})