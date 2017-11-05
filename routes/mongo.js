var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/d1",(req,res) => {
  var collection = db.get().collection("dd");
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    console.log(result.ops);
    res.render('index', { title: result.ops });
  })
})

router.get("/d2",(req,res) => {
  var collection = db.get().collection("dd");
  collection.insertMany([
    {b : 1}, {b : 2}, {b : 3}
  ], function(err, result) {
    console.log(result.ops);
    res.render('index', { title: result.ops });
  })
})

router.get("/d3",(req,res) => {
  var collection = db.get().collection("dd");
  collection.insertMany([
    {c : 1}, {c : 2}, {c : 3}
  ], function(err, result) {
    console.log(result.ops);
    res.render('index', { title: result.ops });
  })
})

router.get("/d4",(req,res) => {
  var collection = db.get().collection("bb");
  collection.find({}).toArray(function(err, docs) {
    console.log(docs);
    res.render('index', { title: docs });
})
})



module.exports = router;