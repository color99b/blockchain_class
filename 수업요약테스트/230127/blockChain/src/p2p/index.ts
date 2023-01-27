import { WebSocket, WebSocketServer } from "ws";
import Chain from "@core/chain";

// const TYPE = {
//   BLOCK : 1,
//   CHAIN : 2,
// }
enum MessageType {
  // enum : 배열과 비슷한 순서가 있는 데이터이다. 열거형이라고 한다.
  //  4~7번째 줄이랑 같은 역할을 한다.
  // MessageType을 정의한 이유는 어떤 메시지를 주고 받았는지 확인하기 쉽게 하기 위해서.
  lastBlock = 0,
  //마지막 블록을 달라고 하고 준다.
  allBlock = 1,
  //전체 체인을 달라고 하고 준다.
  addBlock = 2,
  //블록이 추가됐다고 알려주고 뭐가 추가됐는지 알려준다.
}
interface IMessage {
  //주고 받을 메세지에 대한 타입
  type: MessageType;
  // 어떤 메세지를 주고 받았는지 확인
  payload: any;
  // 메세지에 담긴 데이터
}
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

  connectSocket(socket: WebSocket, type?: MessageType): void {
    //소켓을 연결한다.
    this.sockets.push(socket);
    //연결된 소켓을 소켓 목록에 추가한다 (peer 목록에 추가)
    // - 후에 어디랑 연결됐는지 확인할 때 등 사용한다.
    socket.on("message", (_data: string) => {
      // message 이벤트가 발생하면 로그로 남긴다.

      console.log(_data.toString());
      const data: IMessage = JSON.parse(_data.toString());
      //받은 메시지를 객체로 파싱

      switch (data.type) {
        //어떤 요청이 왔는지 type으로 확인해서
        case MessageType.lastBlock:
          //마지막 블록 달라고 했을때
          const message: IMessage = {
            type: MessageType.addBlock,
            payload: [this.lastBlock],
            //payload에 마지막블록을 담아준다.
          };
          socket.send(JSON.stringify(message));
          break;

        case MessageType.allBlock: {
          const [newBlock]: [IBlock] = data.payload;
          const isVaild: IBlock | null = this.add2Chain(newBlock);

          if (isVaild !== null) break;
          // isvaild가 null 이 아니다 -> 체인에 블록이 정상적으로 추가된다.

          // 체인에 블록이 정상적으로 추가되지 않았을땐 전체 체인을 보내서 확인해보자.
          const message: IMessage = {
            type: MessageType.addBlock,
            payload: this.getChain,
          };
          socket.send(JSON.stringify(message));
          break;
        }
        case MessageType.addBlock:
          {
            const isVaildChain = this.isVaildChain(data.payload);
            if (isVaildChain.isError === true) break;
            this.replaceChain(data.payload);

            const isVaild = this.replaceChain(data.payload);
            if (isVaild.isError === true) break;

            //연결된 피어들에게 내가 데이터 바뀌었음을 알린다.
            const message: IMessage = {
              type: MessageType.addBlock,
              payload: data.payload,
            };

            this.sockets.forEach((item) => {
              item.send(JSON.stringify(message));
            });
          }
          break;

        default:
          break;
      }
    });

    const message: IMessage = {
      type: type | MessageType.lastBlock,
      payload: type ? this.getChain : [],
    };
    socket.send(JSON.stringify(message));
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
      this.connectSocket(socket, MessageType.addBlock);
      // socket을 연결한다.
      //연결에 성공하면 소켓에 추가한다.
    });
  }
}

export default P2P;
