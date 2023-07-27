const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Database connect succcess")
    } catch (error) {
        console.log("Database connection failed")
    }
}

module.exports = connectDB;