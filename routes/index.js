'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var placeholderValues = {
    pageTitle: 'NewsFlash | Home',
    pageMessage: 'Welcome to NewsFlash.'
  };
  res.render('index', placeholderValues);
});

module.exports = router;
