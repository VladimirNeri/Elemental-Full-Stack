const express = require('express'); 
const router = express.Router(); 

// Item Model
const Posts = require('./src/data/posts'); 

// @route Get data/posts
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
  Posts.find()
    .then(data => res.json(data))
});

export default router; 