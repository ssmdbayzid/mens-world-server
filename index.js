const express = require("express");
const app = express();
const port = process.env.PORT || 5000 ;
const cors = require("cors");
const connectDB = require("./config/connectDB");
require("dotenv").config()

// ------------ Middleware -----------

app.use(express.json())
app.use(cors())

app.get("/", (req, res)=>{
    res.send("MansWorld server connected")
})




app.listen(port, ()=>{
    console.log(`server running with port ${port}`);
    connectDB()
})