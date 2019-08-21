var express = require('express');
var router = express.Router();
var datas = require('../data.json');


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(1)
  res.send(datas)
});

module.exports = router;
