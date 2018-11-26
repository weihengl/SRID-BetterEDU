var express = require('express');
var router = express.Router();
var app = express();
    var io = require('socket.io').listen(app);

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
  socket.on("clean",msg=>{
    socket.broadcast.emit("clean","");
  });
  socket.on("guess",guess=>{
    if(guess != ans){
      socket.emit("fail","");
    }
    else{
      io.sockets.emit("success","");
    }
  });
  socket.on("giveUp",(data)=>{
    io.sockets.emit("giveUp","");
  });
})

var ans;

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

router.post('/answer',(req,res,next)=>{
  req.on('data',function(data){
    ans = data+"";
    return res.status(201).send("an");
  });
});


module.exports = router;