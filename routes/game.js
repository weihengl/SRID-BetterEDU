var express = require('express');
var router = express.Router();
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server).listen(server);





module.exports = router;
