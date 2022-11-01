// HTTP 통신 : 80번 포트 사용, 클라이언트가 요청을 하고 서버가 그 요청에 대해 응답한다.
// 요청과 응답 << 요청이 없으면 서버가 응답을 보낼 수가 없다.
// 서버가 클라이언트에게 마음대로 데이터나 정보 등을 보낼 수 없다.
// HTTPS 통신이랑
const WebSocket = require("ws");

module.exports = (server) => {
  const socket = new WebSocket.Server({ server });
  //소켓을 연결한다. 무언가 확인이 안되더라도 링크는 되어있다.
  let count = 0;
  socket.on("connection", (ws, req) => {
    console.log("socket start");
    ws.on("message", (msg) => {
      console.log(msg.toString());
    });
    ws.interval = setInterval(() => {
      ws.send(count++);
      //데이터를 전송한다
    }, 1100);
    ws.on("close", () => {
      clearInterval(ws.interval);
    });
  });
};
