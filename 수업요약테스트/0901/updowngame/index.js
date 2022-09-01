console.log(Math.random()); // 0부터 1까지의 랜덤수
//parseInt(***) : 정수화 함수.

const comSel = parseInt(Math.random() * 99 + 1);
//컴퓨터 선택완료

//기능 자체 구현에 에러제거 및 살 붙이는 식으로 코딩해도 됨

let playerSel;
console.log(comSel);
let count = 0;
let max = 100;
let min = 0;
let updown = "";
const maxCount = parseInt(prompt("몇 번만에 맞춰볼래?"));
do {
  playerSel = prompt(` ${updown}\n숫자를 선택해주세요. 
컴퓨터가 선택한 숫자를 맞추시면 됩니다.\n
최대 : ${max} / 최소 : ${min} / 남은횟수 : ${maxCount - count}
`); //prompt는 스트링이다.

  playerSel = parseInt(playerSel);
  if (min >= playerSel || max <= playerSel) {
    console.log("제외된 숫자들이다.");
  } else if (playerSel === comSel) {
    console.log(`${count}번 만에 맞추셨네요, 축하합니다.`);
    break;
  } else if (playerSel > comSel) {
    // 플레이어가 선택한 숫자가 컴퓨터가 선택한 숫자 보다 크다.
    max = playerSel; //플레이어가 선택한 숫자가 max가 된다.
    console.log(`down`);
    updown = "더 크게 부르셨네요";
    count++; // 값을 입력했을 때 카운트를 증가시킨다.
    //정상적인 숫자를 입력했을 대만 카운트를 늘리도록 up, dwon 일때 카운트를 추가한다.
  } else if (playerSel < comSel) {
    min = playerSel; // 플레이어가 선택한 숫자가 min이 된다.
    console.log(`up`);

    updown = "더 작게 부르셨네요";
    count++; // 값을 입력했을 때 카운트를 증가시킨다.
  } else console.log("숫자만! 입력해라!");
  undown = "숫자만 입력해라";
} while (playerSel !== comSel && count < maxCount); // 컴퓨터가 숫자 선택후 플레이어가 선택하는 것은 계속 반복되야한다. 플레이어가 컴퓨터의 숫자를 맞출때까지
if (count >= maxCount) {
  //  조건 !count  는 0은 거짓이기때문에 0일때를 표현함 !count
  console.log("우우우우우우 10번안에 이걸 못 맞추네");
}
