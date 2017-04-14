var express = require('express');
var path = require('path');
var logger = require('morgan');

// NOTE: On ALL routes, always, ALWAYS check that this user is logged in.
// If not, redirect him/her to the home page.
var index = require('./routes/index');
var dashboard = require('./routes/dashboard');

var expressApp = express();

expressApp.set('port', (process.env.PORT || 5000));

// Set a dir to expose to public requests. Otherwise, a request to 
// other dirs returns a 403.
expressApp.use(express.static(path.join(__dirname, '/public')));

// View engine setup.
expressApp.set('views', path.join(__dirname, 'views'));
expressApp.set('view engine', 'ejs');

expressApp.use(logger('dev'));

// Respond to various routes.
expressApp.use('/', index);
expressApp.use('/dashboard', dashboard);

// catch 404 and forward to error handler
expressApp.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
expressApp.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

expressApp.listen(expressApp.get('port'), function() {
  console.log('Node app is running on port', expressApp.get('port'));
});
