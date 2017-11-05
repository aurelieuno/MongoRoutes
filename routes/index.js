var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.cookie('name', 'express').send('cookie set');
  console.log('Cookies: ', req.cookies);
});

// router.get('/', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   //res.cookie('name', 'express').send('cookie set');
//   //console.log('Cookies: ', req.cookies);
// });

// app.get('/clear_cookie_foo', function(req, res){
//     clearCookie('foo');
//     res.send('cookie foo cleared');
// });

module.exports = router;
