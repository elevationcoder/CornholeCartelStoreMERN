const { Router } = require('express');
const express = require('express');
const router = express.Router();
const {getAllProducts, getProductById} = require('../controllers/productControllers');

//@desc    GET all products from Db
//@route   GET /api/products
//access Public
router.get("/", getAllProducts)
//@desc    GET a product id from Db
//@route   GET /api/products/:id
//access Public
router.get("/:id", getProductById)

module.exports = router;