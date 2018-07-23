var express = require('express');
var router = express.Router();
var oauthToken = require('../helpers/gunjan/oauth');

router.get('/', function(req, res ) {
  //res.send('respond with a resource');
  res.render('chat', { title: 'Express' });
});


module.exports = router;