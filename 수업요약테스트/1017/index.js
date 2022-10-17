//server 는 외부에서 접속하는 컴퓨터
// port : 일종의 문이다
//http : 80port / https : 443 port / ssh : 22 port / FTP : 21port
// DB(maria) : 3306 port
// 서버는 보통 3가지로 나뉜다 (구분)
// Web Server, Application Server, Database Server
// 웹서버는 html 파일 주는 서버 (front -end )
// Application Serer 는 데이터를 주는 서버 (Back end)
// db server 는 데이터 저장하는 서버(DB)
// WAS : Web Application Server => Web Server + Application Server,
//        혼자서 full-stack 데이터를 주는 서버

// Node.js
// javascript 를 브라우저 환경이 아닌 OS 환경에서 실행하기 위한
// 런타임 환경
// 기본적으로 싱글 스레드 / 이벤트 기반 / 논 블로킹 I/O
// 이벤트 기반 : 이벤트 루프가 있어 정의된 이벤트에 대해서 코드를 실행한다.
// 싱글 스레드 : process , thread
// process : 프로그램 단위
// thread : CPU의 작업 단위 << process 가 실행하기 위해서 CPU에게 받는 영역
// 싱글 스레드는 한 번에 여러 작업을 실행하지 못한다.
// 크롬에서 탭 을 나누면 스레드ㅜ는 그만큼 최소 하나씩 가져간다.
// js 는 기본적으로 싱글 스레드이지만 멀티 스레드 기능을 사용할 수 있게 해주는 라이브러리가 있다.

// REST API Server, Socket Server

// 논 블로킹 i/o   i/o -> in out
// 논 블로킹 -> 동기 / 비동기
// 동기 : 실행되는 작업이 서로 연관성을 가진다
//         하나가 실행이 완료된 후에 그 반환값을 사용해 다른 작업을 실행.
const a = 1;
const b = 2;
let add = function (a, b) {
  return a + b;
};

console.log(add(a, b));
//console 객체의 log 메서드를 실행하기 위해 add 함수를 실핸한다
// add가 끝나야 console log 메서드를 실행한다
// 위 처럼 하나가 실행이 끝나고 반환값으로 다른 작업 하는 것이 동기

//비동기 : 작업을 싱행하는데 별 관계가 없다. 이벤트 함수들이 보통 그렇다.

//블로킹 / 논블로킹
// 블로킹 : 동기 작업은 이전 작업을 기다려야한다.
//      -> 이전 작업이 끝날 때 까지 멈춰두는 것을 블로킹.

//논블로킹 : 이전 작업과 무관하게 작업이 진행된다 -> 멈추지 않는다.

// 싱글스레드는 하나의 작업만 진행하는데 어떻게 논블로킹이 성립되는가?
//    -> 시분할 : 코드를 일정 시간으로 짤라서 실행한다.
//        여러 작업을 할 때 각 코드에 대해서 일정한 시간을 진행 후 다른 코드를 진행
//        한 번 다 돌린 후에 다시 이어서 진행한다.
