const router = require('express').Router();
const subcontroller = require('../../controllers/subcontroller');
const authcontroller = require('../../controllers/authcontroller');
const postcontroller = require('../../controllers/postcontroller');

// Subscribe to Newsletter
router.post('/sub', subcontroller.create);

// Auth
router.get('/logout', authcontroller.signOutUser);
router.post('/login', authcontroller.loginUser);
router.post('/signup', authcontroller.signUpUser);

// Posts
router.get('/posts', postcontroller.getAll);
router.get('/posts', postcontroller.getOne);
router.post('/post', postcontroller.createOne);

module.exports = router;
