const express = require('express');
const { getAllBlogs, addBlogs, updateBlog, getBlogById, deleteBlog, getByUserId } = require('../controllers/blogcontroller');

const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs);
blogRouter.post('/add', addBlogs);
blogRouter.put('/update/:id', updateBlog);
blogRouter.get('/:id', getBlogById);
blogRouter.delete('/:id', deleteBlog);
blogRouter.get('/user/:id', getByUserId);

module.exports = blogRouter;