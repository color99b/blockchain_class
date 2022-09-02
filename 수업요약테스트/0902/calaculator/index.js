let firstNum;
let secondNum;
let clickCount = 0;
//카운트를 쓰느냐, 안쓰느냐. -> 클릭한 횟수
//firstNum이 비어있는지 - 정의가 되어있지 않았는지 (undefined) || (null 로 선언하고 널인지 체크);

function numSel(num) {
  clickCount++;
  if (clickCount == 1) {
    // console.log(clickCount);
    firstNum = num;
  } else if (clickCount == 2) {
    console.log("clickCount");
    secondNum = num;
    // console.log(clickCount);
  }
}

function check() {
  console.log(firstNum);
  console.log(secondNum);
}

function calculate(order) {
  if (clickCount < 2) return;
  switch (order) {
    case "+":
      alert(firstNum + secondNum);
      break;
    case "-":
      alert(firstNum - secondNum);

      break;
    case "*":
      alert(firstNum * secondNum);

      break;
    case "/":
      alert(firstNum / secondNum);

      break;
    case "%":
      alert(firstNum % secondNum);

      break;
  }
}
