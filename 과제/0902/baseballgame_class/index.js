// let num = prompt("자리수를 입력하세요");

let numArr = [];
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
// // }

// // avoid(num);
// function select() {
//   for (let i = 0; i < 3; i++) numArr[i] = Math.floor(Math.random() * 10);

//   // while (numArr[0] < 1) numArr[0] = Math.floor(Math.random() * 10);

//   // while (numArr[i+1] == numArr[i]) numArr[1] = Math.floor(Math.random() * 10);

//   // while (numArr[2] == numArr[1] || numArr[2] == numArr[0])
//   //   numArr[2] = Math.floor(Math.random() * 10);

//   console.log(numArr);
//   //정답지;
// }

function comSelectFunc1() {
  for (; numArr.length < 3; ) {
    const tempNum = parseInt(Math.random() * 10);

    if (!numArr.includes(tempNum)) numArr.push(tempNum);
  }
}
comSelectFunc1();
console.log(numArr);

// select();

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

//
//
//
//
// if (!numArr.includes(임시저장장소숫자)) numArr.push(랜덤숫자);
// 중복처리 : 중복이 없으면 푸시한다.
// includes 메서드는 매개변수가 배열에 포함되어 있는지 boolean 값을 리턴

// function comSelectFunc1() {
//   for (; comSel.length < 3; ) {
//     const tempNum = parseInt(Math.random() * 10);
//     console.log(tempNum);
//     if (!comSel.includes(tempNum)) comSel.push(tempNum);
//   }
// }
// comSelectFunc1();

// isNaN 함수는 매개변수가 NaN,
// 즉 숫자가 아닌 문자를 강제로 숫자로 바꿨는지 확인해준다.
while (true) {
  let playerNum = [];
  while (playerNum.length < 3) {
    const tempInput = prompt(`3자리의 숫자를 입력하시오
                                0으로 시작가능 / 중복숫자 불가
     `);
    // 입력창에 대해서 취소를 누르면 + 아무값도 넣지 않으면
    // tempInput은 정의되지 않아 undefined 를 갖게된다.
    // 그래서 length를 갖지 못해 if에 문제가 생긴다.

    if (!tempInput) {
      alert("게임을 종료합니다.");
      //tempInput이 undefined, ''일때 false를 갖게되며 !를 사용해
      //부정함으로써 빈값을 입력하거나, 취소를 누를 시 게임을 종료한다.
      break;
    }

    //입력받은게 숫자가 아니거나 3글자가 아니라면
    if (tempInput.length != 3 || isNaN(parseInt(tempInput))) {
      continue; //for문에서 i++ 이 있으면 i++이 실행된다.
      //continue는 반복문에서만 사용된다.
    }

    tempInput.split("").forEach((item) => {
      //forEach는 배열이 아이템을 하나하나 가져와서 매개변수 함수에 전달하여 함수를 실행한다.
      // (item) => (내용) << 화살표 함수이다.
      // item : tempInput.spilt("") 배열하나하나의 아이템이다.
      // funcition (item) {내용} 으로 대체 가능
      if (!playerNum.includes(parseInt(item))) playerNum.push(parseInt(item));
      //컴퓨터가 선택한 랜덤 수는 정수기 때문에, 플레이어가 입력한 숫자 또한 정수로 정의한다.
      //컴퓨터가 선택한 랜덤 수와 마찬가지로 중복되면 안되기 때문에 playerNum 배열에 숫자가 없는지
      // 확인 후 추가한다.
    });
    console.log(playerNum);

    //위의 foreach를 아래의 코드로 대체 할 수 있다.
    const tempArr = tempInput.split("");
    //그때그때마다 문자열(tempInput)을 split 메서드를 사용하여 짜르면 시간이 그만큼 늘어나기때문.
    for (let i = 0; i < tempArr.length; i++) {
      if (!playerNum.includes(parseInt(tempArr[i])))
        playerNum.push(parseInt(tempArr[i]));
    }
    if (playerNum.length != 3) playerNum = [];
  }

  if (!playerNum.length) break;
  console.log("선택한 숫자" + playerNum);

  let tempNumber = numArr[0];
  if (playerNum[0] == tempNumber) {
    strike++;
  } else if (playerNum[1] == tempNumber || playerNum[2] == tempNumber) {
    ball++;
  } else out++;

  if (strike == 3) {
    alert(++count + "번 만에 성공하셨네요.");
    break;
  }
  alert(
    ++count +
      "번 시도함 / strike : " +
      strike +
      "/ ball : " +
      ball +
      " / out : " +
      out
  );
}
