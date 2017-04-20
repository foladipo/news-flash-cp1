'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var placeholderValues = {
    pageTitle: 'Dashboard | NewsFlash',
    pageMessage: 'Your News Headlines'
  };
  res.render('dashboard', placeholderValues);
});

module.exports = router;
