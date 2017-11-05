var express = require('express')
var router = express.Router()

// Home page route
router.get('/', function (req, res, next) {
  res.send('Wiki home page')
})

// // About page route
// router.get('/about', function (req, res, next) {
//   res.send('About this wiki')
// })

module.exports = router

/**{ [Function: router]
  params: {},
  _params: [],
  caseSensitive: undefined,
  mergeParams: undefined,
  strict: undefined,
  stack:
   [ Layer {
       handle: [Function: bound dispatch],
       name: 'bound dispatch',
       params: undefined,
       path: undefined,
       keys: [],
       regexp: /^\/?$/i,
       route: [Object] },
     Layer {
       handle: [Function: bound dispatch],
       name: 'bound dispatch',
       params: undefined,
       path: undefined,
       keys: [],
       regexp: /^\/about\/?$/i,
       route: [Object] } ] }**/