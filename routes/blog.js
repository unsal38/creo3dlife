'use strict';
const express = require('express');
const blog = express.Router();

//MİDDLEWARE
const blog_crud = require('../middleware/data_base_crud')
//SCHEMA 
const blog_singleSchema = require('../schema/blog_singleSchema')

blog.post('/create', function (req, res) {
    try {
        const data = req.body
        const create_blog = blog_crud.data_base_create(data)
        console.log(create_blog, 'blog.js router')
    } catch (err) {
        console.log(err.message, 'blog.js router')
    }
})
blog.get('/blog-single/:id',async function (req, res) {
    const blog_id = req.params.id
    const blog_single_Data = await blog_singleSchema.findById(blog_id)
    res.render('blog-single', {
        page: 'blog-single',
        blog_single_Data
    });
})
blog.get('/',async function (req, res) {
    const blog_data =await blog_singleSchema.find()
    res.render('blog', {
        page: 'blog',
        blog_data
    });
})


module.exports = blog;