const express = require('express');
const app = express();
const http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', ({res}) => {
    res.sendFile(__dirname + '/index.html');
})

io.on("connection", (socket) => {
    console.log('------------------------------------------------------');
    console.log(`${socket.id} - Kullanıcı bağlandı`);
    socket.on('disconnect', () => console.log(`${socket.id} - Kullanıcı çıkış yaptı.`));
    socket.on('chatting', (msg) => console.log(`message: ${msg}`));
})

http.listen(3000, function(){
    console.log('listening on *:3000');
  });
  