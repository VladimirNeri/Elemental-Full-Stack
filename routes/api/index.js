const router = require("express").Router();
const subcontroller = require('../../controllers/subcontroller');
const authcontroller = require('../../controllers/authcontroller');

// Subscribe to Newsletter
router.post('/sub', subcontroller.create);

// Auth
router.get('/logout', authcontroller.signOutUser);
router.post('/login', authcontroller.loginUser);
router.post('/signup', authcontroller.signUpUser);

module.exports = router;