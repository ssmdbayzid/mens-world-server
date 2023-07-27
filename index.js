const express = require('express');
const app = express()
const port = 5000
const bodyParser = require("body-parser")
const connectDB = require("./config/connectDB")
require("dotenv").config()

app.use(express.json())
app.use(bodyParser.json())


app.get("/", (req, res)=> {
    res.send("Server error find")
})

app.listen(port, ()=> {
    console.log(`Server error running with, ${port}`)
    connectDB()
})