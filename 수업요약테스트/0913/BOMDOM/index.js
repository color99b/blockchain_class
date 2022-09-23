// BOM : browser Object model
// dom : document Object model

console.log(window.location);
//location 은 현재 주소에 대한 내용을 담고있다.
// window가 뭐길래 주소 내용을 담고 있는가?
// window 는 bom이다
// 브라우저의 정보들을 갖고있다.

console.log(location);
//window는 root 객체이다.
//root는 최상위 폴더/ 객체/ 클래스 등을 뜻한다.

console.log(window.navigator);
//생각보다 자주 쓸지도 모른다.

console.log(window.navigator.userAgent);
//브라우저와 os 관련된 정보가 정의되어 있다.
//userAgent를 정규표현식을 사용해 원하는 정보만 가져올 수도 있다 (라이브러리로 쉽게 처리 가능)

// ps . 애플 계열은 IOS, iPad, Mac 으로만 나타난다. 기기 기종은 모른다.

console.log(document.head);
//document 는 dom 이다.
// documnet는 html 파일 구조에 대해서 정의한다.
// 적혀있는 그대로 head 정보를 받아온다.

console.log(document);
console.dir(document);
// console.log 로 나오지 않는 것은 dir로 확인한다.
// console.log 로 html 구조가 나오면 dir로 정보를 확인한다.

//BOM / DOM feat.MVC()  Model View Controller

//Node, Tag, element 란 무엇인가?
//tag 는 html 에서 사용하는 명령어의 이름을 뜻했다. ex) html, body, div ,...
// tag는 여는 태그와 닫는 태그로 사용한다.
// element : 여는태그와 닫는 태그를 모두 포함하는 내용
//              dom 내에서 정의되는 tag의 내용이다.
// tag vs element : tag는 이름 그 자체일 뿐, Element 는 객체이다.
// javascript 에서 html 구조를 수정하거나, 내용을 추가하거나 등등에서 사용하는
// tag에 대한 객체다.
// html 파일에서 tag(여는태그, 자식들 포함) 에 사용된 내용들을 모두 포함하는 것이 element이다.

//객체 안에 있는 함수는 method 라고 부른다.
// ex : math 객체 안의 random함수 -> random() 메서드
//객체의 키는 property라고 부른다.

// innerHTML 은 여는 태그와 닫는 태그 사이의 데이터를 문자열로 받는다.
// outerHTML 은 여는 태그와 닿는 태그를 모두 포함하여 데이터를 문자열로 받는다.

console.log(document.getElementById("test").outerHTML);
console.log(document.getElementById("test"));
console.log(document.getElementById("test").style.border);
//엘레멘트 자체에 넣은 것만 표시됨. style 탭 css 탭에 따로 빼둔 친구들을 읽지 못함.
document.getElementById("test").style.border = "10px solid red";
console.dir(document.getElementById("test"));

// 상속 : 상속하는 객체의 정보(프로퍼티, 메서드 모두 포함) 을 갖는 다른 객체를 만드는 행위
// A = {a,b,c} => B / B가 A를 상속한다. 이말은 B={a,b,c}를 뜻한다.
// b는 상속을 받는 개체, a는 상속을 하는 개채 //

// https://hevton.tistory.com/335 상속에 대한 설명

const person = { name: "", age: 0, gender: 0 };
const kim = { name: "김성진", age: 27, gender: 1 };
const yeom = { name: "염예나", age: 22, gender: 4 };
const jung = { name: "정재훈", age: 30, gender: 1 };

//person을 상속해서 kim, yeom, jung 을 만들 수 있다. ( 생성 할 수 있 다 .)

//js는 프로토타입 형태로 되어있다. -> 테스트를 위한 임시 뭉치
//console.dir(document.getElementById("test")); 로 코드 뜯어보면
//prototype divelement -> element -> node 이런식으로 한 단계 하향된다.
//반대로 node 에서 한 단계씩 올라가면서
// 상속의 상속을 거친다.
// javascript 는 기본적으로 node 를 기준으로 하고있다.
// Node 를 이용하여 element, document 등을 생성한다.
// 프로토타입을 업그레이드(기능 추가및 삭제, 기능 개선 등)
