/**
*Module dependencies
*/
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');//???
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
//var flash = require('connect-flash');//in passport config?
//Express doesn’t handle reading data from the <form> element on it’s own.
//We have to add another package called body-parser to gain this functionality.


var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
//==============================================================================
/**
*Create app instance
*/
var app = express();
//==============================================================================
/**
*Module Variables
*/
//These modules/files contain code for handling particular sets of related "routes" (URL paths)
var index = require('./routes/index');
var users = require('./routes/users');
var users = require('./routes/wiki');
var configDB = require('./config/database.js');
var dbURL = configDB.url;
//==============================================================================
/**
*Module Settings and Config
*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));//PUG files html
app.set('view engine', 'pug');
app.set('port', (process.env.PORT || 3000));
var port = app.get('port');
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// mongoose.connect(dbURL);
// var db = mongoose.connection;
// db.on('error', function (err) {
//   console.error('There was a db connection error');
//   return  console.error(err.message);
// });
// db.once('connected', function () {
//   return console.log('Successfully connected to ' + dbURL);
// });
// db.once('disconnected', function () {
//   return console.error('Successfully disconnected from ' + dbURL);
// });
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//makes bin not ok
var db = require('./db')
// Connect to Mongo on start
db.connect(dbURL, function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
    app.listen(port, function() {
      console.log('Listening on port '+port)
    })
  }
})

//==============================================================================
/**
*Middleware
*/

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());//???? with session?

//The urlencoded method within body-parser tells body-parser to extract
//data from the <form> element and add them to the body property in the request object.
//Now, you should be able to see everything in the form field within the req.body object.
//console.log(req.body);//{ name: 'lili', quote: 'this is my quote' }

app.use(express.static(path.join(__dirname, 'public')));//style

// app.use(session({
//   name: 'xpressBlu.sess', store: new mongodbStore({
//     mongooseConnection: mongoose.connection,
//   touchAfter: 24 * 3600}), secret: 'qwertyuiop123456789', resave: false,
//   saveUninitialized: false, cookie: {maxAge: 1000 * 60 * 15}}));


//==============================================================================
/**
*Routes
*/
app.use('/', index);
app.use('/users', users);
//==============================================================================
/**
*Error handling
*/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//==============================================================================
/**
*Export Module
*/
module.exports = app;
//==============================================================================
////////////////////////////////////////////////////////////
// app.listen(port, function() {
//   console.log(`Listening on port` ${port});
// });
//NODE_ENV in express-we are in dev
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
}