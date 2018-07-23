var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');

  /*
    var mysql = require('mysql');

    var con = mysql.createConnection({
      host: "localhost",
      user: "yourusername",
      password: "yourpassword"
    });

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
*/

  res.render('users', { title: 'wwwwww' });
});

router.post('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('users', { title: 'Express' });
});

module.exports = router;
