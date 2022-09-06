// function game() {
//   let numBox = prompt("숫자 몇까지 출력할지 적으시오");

//   numBox = [...numBox];

//   for (let i = 1; i < numBox.length; i++) {
//     numBox[0] += numBox[i];
//   }

//   console.log(numBox);

//   maxNum = parseInt(numBox[0]);
//   console.log(maxNum);
//   for (let i = 1; i <= maxNum; i++) {
//     console.log(i);
//   }
// }

function game() {
  let max = parseInt(prompt("max를 설정하시오(1000까지"));

  if (max > 1000) return game();
  for (let i = 1; i <= max; i++) {
    if (i % 10 == 3 || i % 10 == 6 || i % 10 == 9) {
      console.log("짝");
      if (i % 11 == 0 && parseInt(i / 11) < 10) {
        console.log("짝짝");
        continue;
      } else if (
        i % 11 == 0 &&
        parseInt(i / 11) > 10 &&
        parseInt(i / 11) < 100
      ) {
        console.log("짝짝");
        continue;
      } else if (
        i % 11 == 0 &&
        parseInt(i / 11) > 100 &&
        parseInt(i / 11) < 1000
      ) {
        console.log("짝짝짝");
        continue;
      }
      continue;
    }
    console.log(i);
  }
}

game();

//map 메서드, % 두가지 방법

// 3 13 23 33 43 53

// 6 16 26 36 46 56

// 9 19 29 39 49 59

// n %10 ==3 ,6, 9
// // ->숫자 개수만큼 짝 출력이 안됨
// 11의 배수면 짝2번
// 111의 배수면 짝3번
// 1111의 배수면 짝 4번
