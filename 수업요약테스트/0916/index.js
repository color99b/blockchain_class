const divs = document.getElementsByTagName("div");
// const, let ,var 명령어로 이름 짓는 것이 변수이다.
// 재정의 불가능한 변수 divs를 선언하며 div 라는 tagname 을 html구조 (dom , document )내에서 검색하여 가져와서 정의한다.

[...divs].forEach((elem) => {
  // ...(스프레드, 전개 연산자) 는 배열 등 데이터의 모음을 풀어서 변환한다.
  // 보통 [...***]을 사용하여 유사 배열 ***을 배열로 변환한다.
  //위 방법 사용시 직전 코드 마지막에 ; 가 없으면 한줄로 인식되어서 오류가 나는 경우가 많다.
  //forEach 는 배열의 각 아이템을 매개변수 함수에 매개변수로 전달하여 함수를 실행한다.
  //elem 은 그냥 약어.
  elem.onclick = (e) => {
    console.log(elem.classList.toString());
    //classList는 엘리먼트의 class 를 관리하는 프로퍼티 객체이다.
    console.log("버블링!");
    // console 은 개발자 도구에 출력하기 위한 객체, 개발자 도구에 전달된 매개변수를 단순 출력.
    e.stopPropagation();
    //버블링을 막는 메서드;
  };
});
//위의 코드는 버블링 기능 볼 수 있다. (안좋은 기능임)
// 버블링 : 자식이 클릭 됐을 때 부모도 같이 클릭되는 것.   -> 스크롤 두 개가 겹쳤을때 focus 가된 스크롤을 제외한 남은 스크롤에 e.stopPropagation() 으로 버블링을 막는다.
// 캡쳐링 : 아래쪽을 클릭했는데 부모쪽부터 클릭이 내려옴 (안좋은 기능임) addEventListener 를 이용해 확인할 수 있다.
// 이벤트 함수 실행시 캡쳐링이 진행 후 버블링이 진행된다.

console.log(a);
var a = 1;
console.log(a);

function asd() {
  console.log(a);
}
// 변수에 넣지않고 위처럼 바로 function 을 선언하면 var 처럼 함수 hoisting 이 발생한다.

//아래처럼 변수에 넣고 불러와야 함수 호이스팅이 발생하지않는다.
// asdFunction(); //호이스팅이 발생하지않아 에러
let asdFunction = function () {
  console.log(a);
};

asdFunction(); // 위에서 함수를 읽었기에 에러가 나지않는다.

// 구조분해할당 정말 많이 사용한다.
const tempArr = [1, 2, 3, 4, 5];
const [aa, bb, ...cc] = tempArr;
// 안에 하나씩 들어가다가 ...cc엔 나머지를 배열로 넣는다.
console.log(aa);
console.log(bb);
console.log(cc);

const tempObj = {
  //객체이고.
  aaa: 11,
  bbb: 22,
  ccc: 33,
};
//아래처럼 객체의 원하는 속성만 데리고 오고 가지고 놀수있다. aaa가 이름, bbb가 출석번호라면 아래처럼.
const { bbb, aaa } = tempObj;
console.log(aaa);
console.log(bbb);
const { ccc } = tempObj;
console.log(ccc);

//getElementsByClassName 으로 가져오면 class name 을 가진 엘레먼트를을 html collection 으로 받아온다.
//html collection을 [...***] 하게되면 배열로 바뀌어서 for each 로 작용함.
