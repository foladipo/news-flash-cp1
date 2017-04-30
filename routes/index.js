const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const placeholderValues = {
    pageTitle: 'News Flash | Home',
    pageMessage: 'Welcome to News Flash',
  };
  res.render('index', placeholderValues);
});

module.exports = router;
