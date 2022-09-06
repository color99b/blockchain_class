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
  let max = parseInt(prompt("max를 설정하시오"));

  let number = [];

  for (let i = 0; i < max; i++) {
    number[i] = i + 1;
  }
  console.log(number);

  if (number.includes(3)) {
  }
}
game();

//map 메서드, % 두가지 방법
