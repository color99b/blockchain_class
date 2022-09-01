//변수는 데이터에 이름을 짓는것, 함수는 기능을 실행하는 코드자체에 이름을 지은 것.

function test() {
  //function 이름 () {}
  // {} 안에 실행할 코드가 들어간다.
  // () 안에는 함수를 사용할 때 함수에게 줄 정보를 입력한다. (매개변수)

  console.log(`넣고 싶은 걸 넣어봐`);
}

function test1() {
  console.log(`함수를 초기화합니다.`); //초기화 : 선언하고 정의까지
  console.log(`이 형식으로 함수를 초기화하는 방식: 함수 선언문`);
  //function 이름(){} << 함수 선언문이다.
}

let test2 = function () {
  console.log(`함수를 초기화합니다.`); //초기화 : 선언하고 정의까지
  console.log(`이 형식으로 함수를 초기화하는 방식: 함수 표현식`);
};

const test3 = () => {
  console.log(`함수를 초기화합니다.`); //초기화 : 선언하고 정의까지
  console.log(`이 형식으로 함수를 초기화하는 방식: 화살표 함수`);
  // const/let 이름 = () => {}
};

//=========== 위 세가지 방식이 다 같은 초기화방법인데 사용처는 나중에=====

test1();
test2();
test3();
//함수를 호출한다.

//매개변수란 함수에 데이터를 전달하게 된 변수
// 함수가 사용해야할 데이터를 함수에 꽂아준다.

function addFunc(firstNum, secondNum) {
  // firstNum, secondNum 이 매개변수다.

  console.log(firstNum + secondNum);
}

addFunc(2, 3);
//2가 firstNum 이고, seconNum은 3이 되는것.

function addFunc2(firstNum, secondNum) {
  // firstNum, secondNum 이 매개변수다.

  return firstNum - secondNum;

  //return : 반환값. 이 함수가 끝났을때 함수가 돌려주는 값.
}

let func2 = addFunc2(10, 3);
console.log(func2);
let func2_1 = addFunc2(5, 1);
console.log(func2_1);
let func1 = addFunc(10, 5);
console.log(func1); // addFunc 함수는 리턴값이 없기 때문에 undefined가 된다.

console.log(Math.random());

function ran1() {
  //정수 제조
  let ran1 = Math.floor(Math.random() * 10);
  console.log(ran1);
}

function ran2() {
  //난수제조
  let ran2 = Math.random();
  console.log(ran2);
}
//console.log 는 리턴값이 없어서 매개변수로 쓰게되면 리턴값이 없어서 undefined 가 나온다.

function makeFloat(n) {
  n = Math.floor(n * 10);
  return n;
}

function makeRandom() {
  let num = Math.random();
  return num;
}

function ran4() {
  //난수제조 함수
  let ran4 = makeRandom();
  console.log(ran4);
}

function ran3() {
  //정수제조 함수
  let ran3 = makeFloat(makeRandom());
  console.log(ran3);
}

function sel(num) {
  switch (num) {
    case 1:
      return "검";
      console.log("검을 선택했어요"); //return을 만나면 값을 반환해서 함수가 끝남. 따라서 안나옴
      break;
    case 2:
      return "활";
      break;
    case 3:
      return "방패";
      break;
    case 4:
      return "도끼";
      break;
    default:
      false;
  }
  console.log(`asd`); // switch문에서 return을 만나서 함수가 끝나버리기때문에
  //스위치문을 빠져나와서 콘솔을 찍는게 아니라 함수가 종료됨.
}
let num;
function weapon() {
  do {
    num = prompt("숫자를 입력하세요");
    selnum = sel(parseInt(num));
    console.log(selnum);
  } while (!selnum);
}
