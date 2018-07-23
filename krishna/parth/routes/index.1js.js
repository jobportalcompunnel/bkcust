var express = require('express');
var router = express.Router();
var oauthToken = require('../helpers/gunjan/oauth');

/* GET home page. */
//console.log(oauthToken);
router.get('/', function(req, res, next) {
  // oauthToken.oauth();
  // console.log(req);

  /*  for die error */
  /*
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write('{prodictid:456}');
    res.end();
  */

    var q = oauthToken.urlDD.parse(req.url, true).query;
    console.log(q);
    //  //var txt = q.year + " " + q.month;
    // // res.end(txt);
    var url = "http://developer.cumtd.com/api/v2.2/json/GetStop?" +
    "key=d99803c970a04223998cabd90a741633" +
    "&stop_id=it"

    oauthToken.request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body.stops[0].stop_id) // Print the json response
        res.render('index', { title: 'Express' +req.url,api:body});
    }
});


   // res.render('index', { title: 'Express' +req.url,body:body.time});
   
});

module.exports = router;
