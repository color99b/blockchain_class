import { WebSocket, WebSocketServer } from "ws";
import Chain from "@core/chain";
class P2P extends Chain {
  private sockets: Array<WebSocket>; // 연결된 peer의 목록

  constructor() {
    //Chain을 상속받는 이유 : 현재 p2p 서버에 기존의 체인을 상속함으로써
    //블록 추가등에 있어서 편하다.
    super();
    this.sockets = [];
  }

  get getSockets(): WebSocket[] {
    return [...this.sockets];
  }

  connectSocket(socket: WebSocket): void {
    //소켓을 연결한다.
    this.sockets.push(socket);
    //연결된 소켓을 소켓 목록에 추가한다 (peer 목록에 추가)
    // - 후에 어디랑 연결됐는지 확인할 때 등 사용한다.
    socket.on("message", (_data: string) => {
      // message 이벤트가 발생하면 로그로 남긴다.

      console.log(_data.toString());
    });

    socket.send("얄리얄리얄량성 알랼리얄랴");
    //방금 연결한 소켓 서버에 message 이벤트를 보낸다.
  }

  listen(port: number): void {
    const server: WebSocketServer = new WebSocket.Server({ port });
    //Ganache (가나슈) 라는 개인용 블록체인이 있다.
    // 이 가나슈의 초기 포트 설정이 7545이다.
    // 서버쪽에 ts로 type 정의하면 터짐.
    server.on("connection", (socket: WebSocket) => {
      console.log("socket start");
      this.connectSocket(socket);
    });
  }

  addToPeer(peer: string): void {
    //소켓을 생성하고 연결한다.
    const socket: WebSocket = new WebSocket(peer);
    //상대 소켓 서버 주소를 받아서 연결을 시도한다.
    //서버에 연결이 들어왔을때
    socket.on("open", () => {
      //연결 성공 시 open 이벤트가 발생한다.
      console.log("open");
      this.connectSocket(socket);
      // socket을 연결한다.
      //연결에 성공하면 소켓에 추가한다.
    });
  }
}

export default P2P;
