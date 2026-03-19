'use strict';

const express = require('express');
const site = express.Router();

site.get('/', function (req, res) {
  res.render('index');
});


module.exports = site;