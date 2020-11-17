const router = require('express').Router();
const subcontroller = require('../controllers/subcontroller');
const authcontroller = require('../controllers/authcontroller');
const postcontroller = require('../controllers/postcontroller');
const bookingcontroller = require('../controllers/bookingcontroller');

// Auth
// router.get('/logout', authcontroller.signOutUser);
router.post('/login', authcontroller.loginUser);
router.post('/signup', authcontroller.signUp);
router.get('/logout', authcontroller.logout);
 
// Posts
router.get('/post', postcontroller.getAll);
router.get('/post/getone/:id', postcontroller.getOne);
router.post('/post/createone', postcontroller.createOne);

// Booking Subscriptions 
router.get('/checkout-session/', bookingcontroller.getCheckoutSession);

// Subscribe to Newsletter
router.post('/sub', subcontroller.create);
module.exports = router;
