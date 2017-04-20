const express = require('express');
const path = require('path');
const logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

const isLoggedIn = true;

// NOTE: On ALL routes, always, ALWAYS check that this user is logged in.
// If not, redirect him/her to the home page.
const index = require('./routes/index');
const dashboard = require('./routes/dashboard');

const expressApp = express();

expressApp.set('port', (process.env.PORT || 5000));

// Set a dir to expose to public requests. Otherwise, a request to 
// other dirs returns a 403.
expressApp.use(express.static(path.join(__dirname, '/dist')));

// View engine setup.
expressApp.set('views', path.join(__dirname, 'views'));
expressApp.set('view engine', 'ejs');

expressApp.use(logger('dev'));

// Redirect all non-logged in users to the home page.
// Otherwise, move on to the route they specified initially.
// TODO: Add code such that after he/she logs in, a user is 
// taken to the route they were going to before.
expressApp.all('*', function(req, res, next) {
  if (!isLoggedIn) {
    res.redirect('/');
  } else {
    next();
  }
});

// Respond to various routes. 404s are handled further down.
expressApp.use('/', index);
expressApp.use('/dashboard', dashboard);

// Catch 404 and forward to error handler.
expressApp.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler.
expressApp.use(function(err, req, res, next) {
  // Set locals, only providing error in development.
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page.
  res.status(err.status || 500);
  res.render('error');
});

expressApp.listen(expressApp.get('port'), function() {
  console.log('Node app is running on port', expressApp.get('port'));
});