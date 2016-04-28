var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var orders = require('./routes/orders');
var login = require('./routes/login');
var returns = require('./routes/returns');
var csCallScreen = require('./routes/csCallScreen');
var calls = require('./routes/calls');

var app = express();

var oneDay = 86400000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret: '1234567890QUERTY'}));
app.use(express.static(path.join(__dirname, 'public'), {maxAge: oneDay}));

app.use('/', routes);
app.use('/login', login)
app.use('/users', users);
app.use('/orders', orders);
app.use('/returns', returns);
app.use('/csCallScreen', csCallScreen);
app.use('/calls', calls);

app.listen(process.env.PORT || 4949);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
