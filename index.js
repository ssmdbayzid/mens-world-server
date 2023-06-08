const express = require("express");
const app = express();
const port = process.env.PORT || 5000 ;
const cors = require("cors");
const connectDB = require("./config/connectDB");
const productRoute = require("./routes/productRoute");
const signUpRoute = require("./routes/auth/signupRoute");
const logInRoute = require("./routes/auth/logInRoute");
const userRoute = require("./routes/userRoute");
require("dotenv").config()

// ------------ Middleware -----------

app.use(express.json())
app.use(cors())


//-----------   Routes Section --------------

// -------- Auth Route -------------

app.use("/auth/signUp", signUpRoute)
app.use("/auth/logIn", logInRoute)

// User Route
app.use("/users", userRoute)

// Product Route
app.use("/products", productRoute)

app.get("/", (req, res)=>{
    res.send("MansWorld server connected")
})




app.listen(port, ()=>{
    console.log(`server running with port ${port}`);
    connectDB()
})