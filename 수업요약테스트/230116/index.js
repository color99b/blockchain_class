const net = require("net");
//net 은 node.js에서 제공하는 TCP 서버를 열 수 있는 모듈.
// express, morgan, cookie-parser , expess-session, dotenv < npm에 올라와 있는 ㅏㄹ이브러리
// 두 차이는 무엇인가? : 딱히 차이는 없으나 Node.js 자체에 이미 설치도어 있는지 아닌지정도

//Buffer란.
// node.js에서 사용하는 바이너리 데이터를 저장하는 객체.
// -binary data << 이진 데이터 << 컴퓨터가 저장, 처리 등등 계산을 할 때 사용한다.
// RAM 등에 저장되는 데이터를 저장된 그대로 보여준다. (16진수로)
// - 010100001010100000000 -> A2B451
// 한 번 생성하면 크기를 변경할 수없다.
// - 배열의 경우 push 몇 개까지 될까? 정하지 않는다 모른다
// - 버퍼는 처음 정한 크기를 넘겨 저장할 수 없다.
// 생성 방법
// 1. 데이터를 받아서 버퍼로 변환한다.
const tempBuffer1 = Buffer.from("buffer test from");
// console.log(tempBuffer1.toString(), tempBuffer1);
const tempBuffer2 = Buffer.from("가 각 간 갇 갈 한글 테스트");
// console.log(tempBuffer2.toString(), tempBuffer2);

const tempBufferArr1 = Buffer.from([1, 2, 3]);
// console.log(tempBufferArr1);
//toString 해도 아무것도 안찍힘.
//300은 44가 찍힌다 -> 255까지만 저장이 되기에 255넘으면 256으로 나눈 나머지만 저장한다.
const tempBufferArr2 = Buffer.from(["가", "나", "다"]);
// console.log(tempBufferArr2);
//한글 등등은 넣을 수 없다.
// 배열을 버퍼로 변환 시 아이템 하나하나가 버퍼 한칸한칸으로 변환된다.
// 버퍼는 16진수로 최대 FF(255)까지만 나타낼 수 있다.

//2. 버퍼의 길이를 정해 버퍼를 만든다.
const tempBuffer3 = Buffer.alloc(5);
tempBuffer3[2] = 255;
// console.log(tempBuffer3);
// console.log(tempBuffer3.length);
tempBuffer3.write("abcdefghijklmn");
// console.log(tempBuffer3.toString());

//java에서 buffer를 쓰면 파일을 더 빨리 받아온다 -> 이유 : 컴퓨터가 계산, 저장하는 이진수를 그대로 가져오기 때문에 빠르다.

const tempBuffer4 = Buffer.from([0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68]);
console.log(tempBuffer4.toString());
//16진수는 0xXX로 바로 작성할 수 있다. -> 0x11 -> 17

const server = net.createServer((client) => {
  //TCP 서버를 생성한다.

  client.on("data", (data) => {
    // console.log(data.toString());
    //컴퓨터가 데이터를 처리할 때 이진수로 처리한다.
    // 이진수를 저장하려면 Buffer를 사용한다 -> data를 받으면 그 data는 버퍼이다.
    // GET /HTTP/1.1 << 어떤 메서드를 사용해서 어떤 라우터 로 어떤 프로토콜로 보냈는지에 대한 정보읻.
    // 쿼리스트링도 포함된다.
    // Connection: keep-alive << 통신연결에 대한 설정: 연결을 유지해라.
    // Cache-Control: max-age=0 << 캐시 제어 설정 : 최대나이0 -> 바로 삭제
    // sec-ch-ua: "Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108" < 간랸한 브라우저 정보
    // sec-ch-ua-mobile: ?0 << 모바일 여부
    // sec-ch-ua-platform: "Windows"
    // Upgrade-Insecure-Requests: 1 << 암호화되고 인증된 응답에 대한 클라이언트의 기본 설정.
    // User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 << 브라우저의 각종 버전정보
    // Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9 << 브라우저에서 요청한 정보 타입, 앞에서부터 우선순위
    // Sec-Fetch-Site: none << CORS 설정 - 해당 정보를 요청한 주소가 서버의 주소가 맞는가 확인하는것, 서버의 데이터를 조금이라도 안전하게 지치키위해 확인.
    // Sec-Fetch-User: ?1 << CORS 설정
    // Sec-Fetch-Dest: document << CORS 설정 (브라우저가 이해할 수 있는 인코딩, 없는 인코딩)
    // Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7 << CORS 설정  (브라우저가 이해할 수 있는 언어)
    client.write(`HTTP/1.1 200 OK
Connection: Close
Content-Type: image/avif,image/webp,image/apng,*/*;q=0.8; charset=UTF-8
Content-Length:10

Hi Block 7`);
    //줄바꿈, 띄어쓰기 모두 지켜야한다.
    //프로토콜 HTTP 상태코드 메세지
    // connection : close 연결 끊기
    // Content-tpye : 어떤 데이터로 응답할거냐, 어떤 정보를 보낼지 (포멧) 등등을 설정
    // contet-length : 데이터의 길이 / 줄바꿈 한 번 있어야함 / 보낼 데이터임
  });
});

server.on("close", () => {
  //Socket 했을 때와 마찬가지로 통신에 대한 이벤트를 추가한다.
  console.log("연결이 끊겼다");
});

server.on("connection", () => {
  console.log("연결이 생겼다");
});

server.listen(4193, "127.0.0.1", () => {
  // listen -> 요청을 받을 수 있는 상태로 대기한다.
  console.log("서버를 열었다.");
});
