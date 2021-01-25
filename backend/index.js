const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get('/', (req, res) => {
  res.end("Merhaba");
});
///Yeni gelen connectionları dinliyoruz.

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.broadcast.emit("welcome");
  socket.on("disconnect", ()=> console.log("user disconnected"))

  socket.on('current-color', (color) => {
    console.log(color);
    socket.broadcast.emit('recieve-color',color);
  })
});
http.listen(3000, () => {
  console.log('listening on *:3000');
});