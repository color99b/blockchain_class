// const express = require("express");
// const Web3 = require("web3");

// const app = express();

// const web3 = new Web3(
//   new Web3.providers.WebsocketProvider("ws://localhost:8081")
// );

// //geth에서 websocket 열기
// //  --ws --ws.port 8081 --ws.addr "0.0.0.0" --ws.origins "*"  붙이기

// web3.eth.subscribe("newBlockHeaders", (error, result) => {
//   if (!error) {
//     console.log(result);
//   }
// });

// app.listen(8000, () => {
//   console.log("8000 server open");
// });
const express = require("express");
const Web3 = require("web3");

const app = express();

const web3 = new Web3(
  new Web3.providers.WebsocketProvider("ws://localhost:8081")
);

//geth에서 websocket 열기
// --ws --ws.port 8081 --ws.addr "0.0.0.0" --ws.origins "*"
// 뜨지 않으면 ws.addr 을 삭제하고 실행하면 밑의 subscribe 실행된다.

web3.eth.subscribe("newBlockHeaders", (error, result) => {
  if (!error) {
    console.log(result);
  }
});

app.listen(8000, () => {
  console.log("8080 server open");
});
