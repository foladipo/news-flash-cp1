

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const placeholderValues = {
    pageTitle: 'Dashboard | News Flash',
    pageMessage: 'Your News Headlines',
  };
  res.render('dashboard', placeholderValues);
});

module.exports = router;
