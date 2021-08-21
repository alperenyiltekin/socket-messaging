const express = require("express");
const socket = require("socket.io");
const app = express();

app.use(express.static("public"));

const server = app.listen(5000, () => {
  console.log("Server running on 5000");
});

const io = socket(server);

io.on("connection", function (socket) {
  socket.on("chat", function (data) {
    io.sockets.emit("chat", data);
    console.log(data);
  });

  socket.on("typing", function (data) {
    socket.broadcast.emit("typing", data);
  });
});
