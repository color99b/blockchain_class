const socket = require("socket.io");

module.exports = (server) => {
  const io = socket(server);

  io.on("connection", (ws) => {
    // 프론트에서 message라는 이름으로 보낸 데이터를 받아서 처리한다.
    ws.on("message", (data) => {
      console.log(data);
      // 위에서 콘솔로 확인한 후에 message라는 이름으로 프론트에 데이터를 보낸다.
      // ws.emit("message", data);

      //ws.emit 은 연결된 프론트에 보낸다
      io.emit("message", data);
      //io.emit 은 연결된 모든 프론트에 보낸다.

      ws.broadcast.emit("message", "전송됨");
    });
    ws.on("disconnect", () => {
      console.log("disconnect");
      io.emit("disconnect1", "상대방이 끊음");
    });
  });
};
