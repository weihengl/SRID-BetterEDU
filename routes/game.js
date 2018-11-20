var express = require('express');
var router = express.Router();
var WebSocket = require('ws');
//const wss = new WebSocket.Server({ port: 8080 })
io = require('socket.io').listen(8080)
io.sockets.on('connection', (socket) => {

  socket.on('move', message => {
    console.log(message.x);
    console.log(message);
    socket.broadcast.emit("move",message);
  });
  socket.on('down', message => {
    console.log(message.x);
    console.log(message);
    socket.broadcast.emit("down",message);
  });

})

router.get('/',(req,res,next)=>{
  res.render('game');
});

router.post('/',(req,res,next)=>{
  var body = "";
  req.on('data',function(data){
     body += data;
  });
  req.on('end',function(){
    res.writeHeader(200,{
      'Content-Type':'text/plain',
      'Access-Control-Allow-Origin':"*"
    });
    console.log(body);
    res.write(body);
    res.end();
  })
});

module.exports = router;