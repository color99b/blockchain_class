// import Block from "@core/block/block";
// import Chain from "@core/chain/chain";
// import Chain from "@core/chain/index";

// const genesis = new Block(["첫 블록"]);
// console.log("genesis: ", genesis);

// const second = new Block(["두번째 블록"], genesis);
// console.log("second: ", second);
// const third = new Block(["세번째 블록"], second);
// const previousBlock = new Block(["이전 블록"]);
// previousBlock.height = 29;
// previousBlock.difficulty = 10;
// const adjustmentBlock = new Block(["단위 개수 전 블록"]);
// adjustmentBlock.height = 20;
// adjustmentBlock.difficulty = 11;

// const newBlock = new Block(["asdf"], previousBlock, adjustmentBlock, {
//   DAI: 10,
//   averageGenerationTime: 60 * 1000,
// });

// console.log(newBlock);

// const newChain = new Chain();
// newChain.addBlock(["asddd"]);

// newChain.add2Chain(third);

// 테스트용 블록 32개 추가
// for (let i = 0; i < 300; i++) {
//   newChain.addBlock([`test block ${i}`]);
// }

// console.log(newChain.chain);

import P2P from "./p2p";
import express, { Express, Request, Response } from "express";
import Wallet from "@core/wallet";
// tsconfig 에서 esMoudleInterop 를 true를 줘서 한 줄에 가능
// 원래는 import express, import {Express} 따로 2줄로 선언해야함

const app: Express = express();
const ws: P2P = new P2P();

app.use(express.json());
//data 주고받을때 json으로 주고받아서 use 선언해줘야함.
//data를 json화해서 주고받겠다는 문법임.

//tcp/ip 1계층언어는 기계어 01 binary 4계층인 우리는 string
// 4계층인 우리까지는 다 binary 이고 우리때 버퍼로 취급함?
// json은 자료형식이 string이다.

app.use((req: Request, res: Response, next) => {
  const baseAuth = (req.headers.authorization || "")?.split(" ")[1];
  console.log("baseAuth", baseAuth);
  if (!baseAuth || baseAuth === "") return res.status(401).end();
  //인증정보가 없으면 401(유효하지 않은 인증)을 응답한다.
  const [userId, userPw] = Buffer.from(baseAuth, "base64")
    .toString()
    .split(":");
  if (userId !== "admin" || userPw !== "1234") return res.status(401).end();
  next();
});
//http 통신에서 header를 이용한 인증 방법
//Authorization : Basic 방식을 사용한다.
//아무나 내 블록체인 네트워크(서버 || peer) 에 블록을 추가하지 못하게 하기 위해서

app.get("/chains", (req: Request, res: Response) => {
  res.json(ws.getChain);
});

app.post("/block/mine", (req: Request, res: Response) => {
  const { data }: { data: string[] } = req.body;
  const newBlock: IBlock | null = ws.addBlock(data);
  if (newBlock === null) res.send("error data");
  res.json(newBlock);
});

app.post("/peer/add", (req: Request, res: Response) => {
  const { peer }: { peer: string } = req.body;
  ws.addToPeer(peer);
  res.end();
});

app.get("/peer", (req: Request, res: Response) => {
  const sockets = ws.getSockets.map(
    (item: any) => item._socket.remoteAddress + ":" + item._socket.remotePort
  );
  res.json(sockets);
});

app.post("/transaction/send", (req: Request, res: Response) => {
  console.log(req.body);
  const isVaild = Wallet.verify(req.body);
  console.log(isVaild);
  res.end();
});

const ports = [
  [8080, 7545],
  [8081, 7546],
];
const idx = 0;

app.listen(ports[idx][0], () => {
  console.log("server start" + ports[idx][0]);
  ws.listen(ports[idx][1]);
  // WebSocket(P2P) 생성 / 배포
});

//peer1 이 8080이라 7545에 연결하겠다고 peer2인 8081 port에 연결할 주소 ws:7545를 보내는거다.
