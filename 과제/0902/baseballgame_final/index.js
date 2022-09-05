// let num = prompt("자리수를 입력하세요");

let numArr = new Array();
let strike = 0;
let ball = 0;
let out;
let count = 0;

// function select(num) {
//   for (let i = 0; i < num; i++) {
//     numArr[i] = Math.floor(Math.random() * 10);

//     if (numArr[0] == 0) {
//       do {
//         numArr[0] = Math.floor(Math.random() * 10);
//       } while (numArr[0] == 0);
//     }
//   }

//   for (let i = 0; i < num; i++) {
//     console.log(numArr[i]); //잘찍히나 확인
//   }
// }

// select(num);
// //랜덤선택이지만 첫번째박스는 0이면 안됨.
// // 1, 7, 7, 9

// function avoid(num) {
//   for (let i = 0; i < num; i++) {
//     for (let j = 1; j < num; j++) {
//       if (numArr[j] == numArr[i]) {
//         // 0 > 1 /
//         do {
//           numArr[j] = Math.floor(Math.random() * 10);
//         } while (numArr[j] == numArr[i]);
//       }
//     }
//   }
// }

// avoid(num);
function select() {
  for (let i = 0; i < 3; i++) numArr[i] = Math.floor(Math.random() * 10);

  // while (numArr[0] < 1) numArr[0] = Math.floor(Math.random() * 10);

  // while (numArr[i+1] == numArr[i]) numArr[1] = Math.floor(Math.random() * 10);

  // while (numArr[2] == numArr[1] || numArr[2] == numArr[0])
  //   numArr[2] = Math.floor(Math.random() * 10);

  console.log(numArr);
  //정답지;
}

select();

function compare() {
  let num1 = prompt("첫 번째 숫자를 입력하세요");
  num1 = parseInt(num1);
  let num2 = prompt("두 번째 숫자를 입력하세요");
  num2 = parseInt(num2);
  let num3 = prompt("세 번째 숫자를 입력하세요");
  num3 = parseInt(num3);
  count++;
  strike = 0; //못맞췄을때 strike와 ball을 0으로 다시 초기화해주기.
  ball = 0;

  let numArr2 = new Array(num1, num2, num3);

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] == numArr2[i]) strike++; //stirke 경우는 바로 이탈
    else {
      for (let j = 0; j < numArr2.length; j++) {
        if (numArr[i] == numArr2[j]) {
          ball++; //컴퓨터가 고른 배열과 비교해서 같은게 있으면 볼을 올린다. 스트라이크는 위에서 예외처리
        }
      }
    }
  }
  if (ball == 0 && strike == 0) {
    return console.log("out! 세가지 숫자는 포함되지 않습니다.");
    // 위 for문을 다 돌았는데 볼과 스트라이크가 둘 다 0이면 숫자가 없는것.
  }
  if (strike == 3)
    return console.log(`축하합니다. ${count}번만에 맞추셨습니다.`);
  console.log(`${strike}S, ${ball}B 입니다.`);
}
