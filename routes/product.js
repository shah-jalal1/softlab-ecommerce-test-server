const express = require('express');

// Created Require Files..
const controller = require('../controller/product');
// const inputValidator = require('../validation/product');
const checkAuth = require('../middileware/check-user-auth');
const checkAdminAuth = require('../middileware/check-admin-auth');
const checkIpWhitelist = require('../middileware/check-ip-whitelist');
// Get Express Router Function..
const router = express.Router();

router.post('/add-single-product', controller.addSingleProduct);
// router.post('/add-single-product',checkIpWhitelist,checkAdminAuth, controller.addSingleProduct);
router.post('/get-all-products', controller.getAllProducts);

module.exports = router;