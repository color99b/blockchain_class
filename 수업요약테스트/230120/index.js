const net = require("net");

const reqParser = require("./lib/req");
const resParser = require("./lib/res");
const staticFunc = require("./lib/static");
const templateFunc = require("./lib/template");
global.isJson = true;
global.board = [];
global.isStatic = false;
// ssr 구현을 위해 static 방식을 사용하지 않는다.
// SSR, server side Renderig : 화면을 서버에서 구성해서 보낸다.
//-> 쉽게 말하면 HTML 파일을 서버에서 만들어서 응답한다.
// 랜더링을 서버에서 처리한다.
// CSR : Client side Rendering : 서버에서 응답한 데이터를 Client 즉
// 브라우저에서 엘리먼트 등을 생성해서 완성한다.
if (global.isStatic) staticFunc();

const server = net.createServer((client) => {
  client.on("data", (data) => {
    const req = reqParser(data.toString());
    const res = resParser(client, req);
    console.log(req.path);
    let isStatic = false;

    if (global.isStatic) {
      // const staticRoutes = staticFunc();
      if (req.method === "GET" && staticRoutes[req.path]) {
        isStatic = true;
        res.sendStaticFile(staticRoutes[req.path]);
      }
    }

    if (!isStatic) {
      if (req.method === "GET" && req.path === "/") {
        const temp = templateFunc(
          "index.html",
          {
            title: "ssr 테스트",
            text: req.query.text || "처음씀",
            link: "/board",
            linkName: "게시판",
          },
          { styleName: "index.css", scriptName: "index.js" }
        );
        res.send(temp);
        // } else if (req.method === "GET" && req.path === "/index.css") {
        //   res.sendFile("index.css");
        // } else if (req.method === "GET" && req.path === "/index.js") {
        //   res.sendFile("index.js");
      } else if (req.method === "GET" && req.path === "/board") {
        const temp = templateFunc(
          "board/index.html",
          {
            li: global.board,
          },
          { scriptName: "board/index.js" }
        );
        res.send(temp);
        // } else if (req.method === "GET" && req.path === "/board/index.js") {
        //   res.sendFile("board/index.js");
        // } else if (req.method === "GET" && req.path === "/board/list") {
        //   res.send(JSON.stringify(global.board));
      } else if (req.method === "POST" && req.path === "/board/add") {
        global.board.unshift(req.body.value);
        res.send(JSON.stringify(global.board));
      } else {
        res.send("404");
      }
    }
  });

  client.on("close", () => {
    console.log("요청에 대한 응답 완료");
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
