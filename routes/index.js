const express = require('express');
const router = express.Router();
const subcontroller = require('../controllers/subcontroller');
const usercontroller = require('../controllers/usercontroller');
const authcontroller = require('../controllers/authcontroller'); 

// Subscribe to Newsletter
router.post('/sub', subcontroller.create);

// auth login
router.post('/signup', authcontroller.signup);
router.post('/login', authcontroller.login);
router.get('/logout', authcontroller.logout);
router.post('/forgotPassword', authcontroller.forgotPassword);
router.patch('/resetPassword/:token', authcontroller.resetPassword);

// Protect all routes after this middleware
router.use(authcontroller.protect);

router.patch('/updateMyPassword', authcontroller.updatePassword);

module.exports = router;
