'use strict';

const express = require('express');
const site = express.Router();


//SCHEMA 
const blog_singleSchema = require('../schema/blog_singleSchema')
//CONTROLLER
const mail = require('../controllers/mail')



site.post('/contact_mail',mail.contact_mail_send)

site.get('/',async function (req, res) {
  const youtube_video_link = 'https://www.youtube.com/watch?v=CtqqmlSaYLo'
  const blog_data =await blog_singleSchema.find()
  res.render('index',{
    page: 'index',
    blog_data,
    youtube_video_link
  });
});



module.exports = site;