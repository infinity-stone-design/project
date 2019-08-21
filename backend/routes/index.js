var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host : "localhost",
  port : 3306,
  user : "",
  password: "",
  database : "",
})

connection.connect();

connection.query('SELECT * from ', function(err, rows, fields) {
  if(!err)
    console.log(rows);
  else
    console.log('Error!!', err);
});

connection.end();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
