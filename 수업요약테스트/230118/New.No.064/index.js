const net = require("net");

const reqParser = require("./lib/req");
const resParser = require("./lib/res");

global.isJson = true;
// === app.use(express.json())
global.board = ["asdf", "qwer", "1234"];
//게시판 목록이다.
const server = net.createServer((client) => {
  //TCP 서버를 만든다.
  client.on("data", (data) => {
    // 연결이 생성되었을 때 그 연결된 클라이언트에서 요청이 들어오는 것을 처리한다.
    console.log(data);
    console.log(data.toString());
    const req = reqParser(data.toString());
    console.log("req", req);
    const res = resParser(client, req);

    //라우터 구현
    // req, 요청으로 들어온 정보를 가져와서 path와 method에 따라 라우터를 구분하여 응답을 보낸다
    if (req.method === "GET" && req.path === "/") {
      //get 형식으로 /라우터 요청이 왔을때 public 폴더의 index.html파일로 응답한다.
      res.sendFile("index.html");
    } else if (req.method === "GET" && req.path === "/index.css") {
      //css 파일을 보내도록 설정
      res.sendFile("index.css");
    } else if (req.method === "GET" && req.path === "/index.js") {
      res.sendFile("index.js");
    } else if (req.method === "GET" && req.path === "/board") {
      res.sendFile("board.html");
    } else if (req.method === "GET" && req.path === "/board.js") {
      res.sendFile("board.js");
    } else if (req.method === "GET" && req.path === "/board/list") {
      res.send(JSON.stringify(global.board));
      //string을 주고받는데 배열을 넘겨서 문제가 생김.-> json.stringify 로 json화
    } else if (req.method === "POST" && req.path === "/board/add") {
      global.board.unshift(req.body.value);
      res.send(JSON.stringify(global.board));
      //string을 주고받는데 배열을 넘겨서 문제가 생김.-> json.stringify 로 json화
    } else {
      //들어온 요청의 형식과 라우터가 아닐 시 정해진 방식이 아닐 시 404 응답한다.
      res.send("404");
    }

    // // res.send("Hi Block 7 with res send");
    // res.sendFile("index.html");
    // express 서버에서 응답 보낼 때 => res.send(보낼 데이터)

    //     client.write(`HTTP/1.1 200 OK
    // Connection: Close
    // Content-Type: image/avif,image/webp,image/apng,*/*;q=0.8; charset=UTF-8
    // Content-Length: 10

    // Hi Block 7`);
  });

  client.on("close", () => {
    console.log("연결오프");
  });
});

server.on("close", () => {
  console.log("연결이 끊겼다.");
});

server.on("connection", () => {
  console.log("연결이 생겼다.");
});

server.listen(4193, "127.0.0.1", () => {
  console.log("4193 서버를 열었다.");
});
