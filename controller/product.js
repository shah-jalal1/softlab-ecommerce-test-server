const {validationResult} = require('express-validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Require Post Schema from Model..
const Product = require('../models/product');

const ObjectId = require('mongoose').Types.ObjectId;

exports.addSingleProduct = async (req, res, next) => {
    console.log("add product");

    try {
        const data = req.body;
        const dataExists = await Product.findOne({productSlug: data.productSlug}).lean();

        if (dataExists) {
            const error = new Error('A product with this name/slug already exists');
            error.statusCode = 406;
            next(error)
        } else {
            const product = new Product(data);
            // PRODUCT
            await product.save();
            res.status(200).json({
                message: 'Product Added Successfully!'
            });
        }

    } catch (err) {
        console.log(err);
        if (!err.statusCode) {
            err.statusCode = 500;
            err.message = 'Something went wrong on database operation!'
        }
        next(err);
    }
}
