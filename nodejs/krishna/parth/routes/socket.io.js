var express = require('express');
var router = express.Router();



var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

router.get('/', function(req, res, next) {   
  res.render('chat', { title: io });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});


module.exports = router;