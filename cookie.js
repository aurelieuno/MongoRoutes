// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//     res.cookie('name', 'express',{domain:'example.com'}).send('cookie set'); //Sets name=express
// });

// app.listen(3000);

var express = require('express');
//var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

//app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.get('/', function(req, res){
    console.log(req.session);
    console.log(req.session.id);
    console.log(req.session.cookie);
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   }else{
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});
app.listen(3030);

/**

Session {
  cookie:
   { path: '/',
     _expires: null,
     originalMaxAge: null
     httpOnly: true } }





     **/