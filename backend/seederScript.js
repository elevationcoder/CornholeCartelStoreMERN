require("dotenv").config();

const products = require('./data/product');

const connectDb = require('./config/db');
const Product = require('./models/Product');

connectDb();

const importData = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(products);

        console.log("Data import SUCCESSFUL!");

        process.exit();
    } catch (error) {
        console.error("Error with data import");
        process.exit(1);
    }
}

importData();