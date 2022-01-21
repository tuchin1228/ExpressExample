var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var web_index = require('./routes/index');
var web_users = require('./routes/users');
// var api_index = require('./routes/api/index');
// var api_dashboard = require('./routes/api/dashboard');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//路由設定
app.use('/', web_index);
app.use('/users', web_users);

app.use('/api', [
  require('./routes/api/index'),
  require('./routes/api/dashboard')
  // api_index,
  // api_dashboard
]);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
