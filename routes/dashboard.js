'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var placeholderValues = {
    pageTitle: 'Dashboard | NewsFlash',
    pageMessage: 'Your News Headlines'
  };
  res.render('index', placeholderValues);
});

module.exports = router;
