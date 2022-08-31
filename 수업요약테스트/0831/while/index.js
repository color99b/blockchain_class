let i = 0;
//반복할 때 i, j, k 이런 식으로 변수를 선언한다.
// i가 뭘까 ?  index의 약자이다.
// array[5] = 배열의 6번째 아이템을 가져온다 << 5 index

while (i < 10) {
  //while은 반복문의 명령어중 하나다.
  //() 조건이 만족되면 실행된다.
  // {} 안의 코드를 실행한 후 () 안의 조건을 다시 확인한다.
  console.log("i =" + ++i);
}

// while (true) console.log(new Date());
// 브라우저를 멈추고 싶으면 위 코드를 실행하시오.

let j = 0;
while (j < 10) {
  console.log("j = " + j++);
}

while (true) {
  console.log(new Date());
  if (--i < 1) break;

  //break 로 원할 때 코드를 멈추고 유기적으로 흐르게 조절 할 수 있음.
}

let k = 0;
// do ~ while은 조건을 확인하기 전에 실행부터 한다.
do {
  console.log("k=" + ++k);
} while (k < 10); //k를 출력해놓고나서 조건을 확인한다.

console.log(i);
while (i !== 0) {
  console.log("asdf1");
}
do {
  console.log("asdf2");
} while (i !== 0);
