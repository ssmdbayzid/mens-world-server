const express = require("express");
const app = express();
const port = process.env.PORT || 5000 ;
const cors = require("cors");
const connectDB = require("./config/connectDB");
const productRoute = require("./routes/productRoute");
const signUpRoute = require("./routes/auth/signupRoute");
require("dotenv").config()

// ------------ Middleware -----------

app.use(express.json())
app.use(cors())


//   Routes 

app.use("/api/signUp", signUpRoute)
app.use("/products", productRoute)

app.get("/", (req, res)=>{
    res.send("MansWorld server connected")
})




app.listen(port, ()=>{
    console.log(`server running with port ${port}`);
    connectDB()
})