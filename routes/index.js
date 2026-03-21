'use strict';

const express = require('express');
const site = express.Router();
const mail = require('../controllers/mail')

site.post('/contact_mail',mail.contact_mail_send)

site.get('/blog', function (req, res){
  res.render('blog',{
    page: 'blog'
  });
})
site.get('/', function (req, res) {
  res.render('index',{
    page: 'index'
  });
});



module.exports = site;