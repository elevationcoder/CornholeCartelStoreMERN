require("dotenv").config();

// import mongoose from 'mongoose';
const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("MongoDb connection SUCCESSFUL!")
    } catch (error) {
        console.error("MongoDb connection FAILED")
        process.exit(1);
    }
}

module.exports = connectDb;