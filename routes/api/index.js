const router = require('express').Router();
const subcontroller = require('../../controllers/subcontroller');
const authcontroller = require('../../controllers/authcontroller');
const postcontroller = require('../../controllers/postcontroller');
const bookingcontroller = require('../../controllers/bookingcontroller');


// Subscribe to Newsletter
router.post('/sub', subcontroller.create);

// Auth
// router.get('/logout', authcontroller.signOutUser);
router.post('/login', authcontroller.loginUser);
router.post('/signup', authcontroller.signUp);
router.get('/logout', authcontroller.logout);

// Posts
router.get('/post/getall', postcontroller.getAll);
router.get('/post/getone/:id', postcontroller.getOne);
router.post('/post/createone', postcontroller.createOne);

// Booking Subscriptions 
router.get('/checkout-session/', bookingcontroller.getCheckoutSession);

module.exports = router;
