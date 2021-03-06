var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var galleryRouter = require('./routes/gallery');
var gameSelectRouter = require('./routes/gameSelect');
var videoConferenceRouter = require('./routes/videoConference');
var aiRouter = require('./routes/ai');
var settingRouter = require('./routes/setting');
var calendarRouter = require('./routes/calendar');
var WebSocket = require('ws');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/gallery',galleryRouter);
app.use('/gameSelect',gameSelectRouter);
app.use('/video',videoConferenceRouter);
app.use('/ai',aiRouter);
app.use('/settings', settingRouter);
app.use('/calendar', calendarRouter);


// catch 404 and forward to error handler


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
