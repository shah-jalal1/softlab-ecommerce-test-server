const express = require('express');
const router = express.Router();
const controller = require('../controller/user');
// const inputValidator = require('../validation/user');
const checkAuth = require('../middileware/check-user-auth');


router.post('/registration', controller.userRegistrationDefault);
router.put('/login', controller.userLoginDefault);
router.post('/firebase-login', controller.userFirebaseAuth);
router.get('/logged-in-user-data', checkAuth, controller.getLoginUserInfo);



module.exports = router;