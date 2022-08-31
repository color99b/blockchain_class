console.log("이것은 개발자 도구 콘솔창에 로그를 남기는 것이다");
console.log("faviocon 이 없다는 오류는 지금은 무시해라");

console.log('1 ==="1" : ' + (1 === "1"));

// 조건문, if && else if && else

if (1 < 2) {
  // 만약 괄호 안이 참이면 if 아래 문장을, 거짓이면 else 아래 문장을 실행한다.
  console.log("1<2는 true다");
} else {
  console.log("1>2는 false다");
}

if (1 > 2) {
  console.log("1<2는 true다");
}
// if에서 조건이 참이어서 해당 코드가 실행되면 elseif, else 등 아래의 코드를 건너뛴다.
//if 와 else if 의 조건이 모두 충족되지 않았을 때 else 문이 실행된다.
else if (2 < 3) {
  console.log("2<3이다");
} else {
  console.log("1<2는 false 다");
}

//조건 ? 참일때 : 거짓일때  ( if문을 한 줄에 넣은 친구 )
console.log(1 < 2 ? "이건 참이야" : "이건 거짓이야");
//삼항연산자

let test1 = 10;
let test2 = 7;

if (test1 < test2) {
  console.log("꼴은 좀 보자");
} else {
  console.log("꼴도 보기 싫다.");
}

let inputData;
// const inputData = prompt("넣고 싶은 값을 입력해보세요");
// prompt로 받는 값은 전부 string 으로 들어가서 text가 됨 -> 조건문에서  쓸 때 유의 -> 형변환 필요
// 숫자로의 형변환 => Number(***) || + *** || parseInt(***) || parseFloat(***)

// switch는 여러 조건을 한 번에 확인한다.
// case는 ()안에 있는 변수의 값이 같은지 확인한다.
switch (inputData) {
  case "1":
    console.log("1을 넣었습니다.1");
  // break;
  case "2":
    console.log("2을 넣었습니다.2");
    break;
  case "3":
    console.log("3을 넣었습니다.3");
    break; //break는 해당 명령어가 있는 지점에서 코드를 정지하는데
  //반복문에서 더 확실하게 알 수있다.
  case "4":
    console.log("4을 넣었습니다.4");
    break;

  default:
    // if문에서 else 같은 친구. case  에서 하나도 걸리지 않으면 마지막으로 실행된다.
    console.log("1부터 4까지만 넣어라.");
}
