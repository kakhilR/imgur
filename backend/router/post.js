const express = require('express');;

const { getPosts, getPost, createPost, updatePost, deletePost } = require('../controllers/posts.js');

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);


module.exports= router;