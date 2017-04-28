'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var placeholderValues = {
    pageTitle: 'News Flash | Home',
    pageMessage: 'Welcome to News Flash'
  };
  res.render('index', placeholderValues);
});

module.exports = router;
