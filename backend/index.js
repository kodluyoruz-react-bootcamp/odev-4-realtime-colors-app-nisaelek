const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.end("Merhaba");
});
///Yeni gelen connectionları dinliyoruz.
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on("new-message",sendColor)
  console.log(sendColor)
  socket.on("disconnect",() => console.log("a user disconnect"));
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});