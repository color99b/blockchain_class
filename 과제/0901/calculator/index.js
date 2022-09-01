let firstNum = 0;
let secondNum = 0;
let a = 0;
let count = 0;

function fNum1(num) {
  if (count <= 2) {
    count++;
    switch (num) {
      case 1:
        if (count == 1) {
          firstNum = 1;
          console.log(`첫번째 숫자는 ${firstNum}`);
        } else if (count == 2) {
          secondNum = 1;
          console.log(`두번째 숫자는 ${secondNum}`);
          count++;
        }
        break;
      case 2:
        if (count == 1) {
          firstNum = 2;
          console.log(`첫번째 숫자는 ${firstNum}`);
        } else if (count == 2) {
          secondNum = 2;
          console.log(`두번째 숫자는 ${secondNum}`);
          count++;
        }
        break;

      case 3:
        if (count == 1) {
          firstNum = 3;
          console.log(`첫번째 숫자는 ${firstNum}`);
        } else if (count == 2) {
          secondNum = 3;
          console.log(`두번째 숫자는 ${secondNum}`);
          count++;
        }
        break;

      case 4:
        if (count == 1) {
          firstNum = 4;
          console.log(`첫번째 숫자는 ${firstNum}`);
        } else if (count == 2) {
          secondNum = 4;
          console.log(`두번째 숫자는 ${secondNum}`);
          count++;
        }
        break;

      case 5:
        if (count == 1) {
          firstNum = 5;
          console.log(`첫번째 숫자는 ${firstNum}`);
        } else if (count == 2) {
          secondNum = 5;
          console.log(`두번째 숫자는 ${secondNum}`);
          count++;
        }
        break;

      case 6:
        if (count == 1) {
          firstNum = 6;
          console.log(`첫번째 숫자는 ${firstNum}`);
        } else if (count == 2) {
          secondNum = 6;
          console.log(`두번째 숫자는 ${secondNum}`);
          count++;
        }
        break;

      case 7:
        if (count == 1) {
          firstNum = 7;
          console.log(`첫번째 숫자는 ${firstNum}`);
        } else if (count == 2) {
          secondNum = 7;
          console.log(`두번째 숫자는 ${secondNum}`);
          count++;
        }
        break;
      case 8:
        if (count == 1) {
          firstNum = 8;
          console.log(`첫번째 숫자는 ${firstNum}`);
        } else if (count == 2) {
          secondNum = 8;
          console.log(`두번째 숫자는 ${secondNum}`);
          count++;
        }
        break;
      case 9:
        if (count == 1) {
          firstNum = 9;
          console.log(`첫번째 숫자는 ${firstNum}`);
        } else if (count == 2) {
          secondNum = 9;
          console.log(`두번째 숫자는 ${secondNum}`);
          count++;
        }
        break;
      case 0:
        if (count == 1) {
          firstNum = 0;
          console.log(`첫번째 숫자는 ${firstNum}`);
        } else if (count == 2) {
          secondNum = 0;
          console.log(`두번째 숫자는 ${secondNum}`);
          count++;
        }
        break;
      default:
    }
  } else {
    alert("두 숫자가 모두 선택되었습니다.");
    count = 100;
  }

  // firstNum++;
  // console.log(`현재의 firstNum의 값은 ${firstNum} 입니다.`);
  return firstNum;
}

//더하기===================================================
function fNumPlus() {
  firstNum++;
  console.log(`현재의 firstNum의 값은 ${firstNum} 입니다.`);
  return firstNum;
}
function sNumPlus() {
  secondNum++;
  console.log(`현재의 secondNum의 값은 ${secondNum} 입니다.`);
  return secondNum;
}

function resultPlus() {
  alert(`두 값을 더한 값은 ${firstNum + secondNum} 입니다.`);
  return;
}

//빼기 ===================================================
function fNumMius() {
  firstNum--;
  if (firstNum < 0) {
    firstNum = 0;
    console.log(` "-" 가 되기때문에 ${firstNum}으로 초기화 되었습니다.`);
  } else {
    console.log(`현재의 firstNum의 값은 ${firstNum} 입니다.`);
  }
  return firstNum;
}
function sNumMius() {
  secondNum--;

  if (secondNum < 0) {
    secondNum = 0;
    console.log(` "-" 가 되기때문에 ${secondNum}으로 초기화 되었습니다.`);
  } else {
    console.log(`현재의 secondNum의 값은 ${secondNum} 입니다.`);
  }
  return secondNum;
}

function resultMius() {
  if (firstNum >= secondNum) {
    alert(`두 값을 뺀 값은 :${firstNum - secondNum} 입니다.`);
  } else {
    alert(`두 값을 뺀 값은 : ${secondNum - firstNum} 입니다.`);
  }

  return;
}

//=====================================================================
//초기화
function reset() {
  firstNum = 0;
  secondNum = 0;
  count = 0;
  console.log(`두 상자의 값 모두 0으로 초기화 되었습니다.`);
}

//===================
//곱하기

function multi() {
  let result = firstNum * secondNum;
  alert(`두 값을 곱한 값은 ${firstNum * secondNum}입니다.`);
  console.log(`두 값을 곱한 값은 ${firstNum * secondNum}입니다.`);
  return result;
}

//=====================
//나누기

function divide() {
  let result;

  if (firstNum >= secondNum) {
    result = firstNum / secondNum;

    alert(`두 값을 나눈 값은 ${firstNum / secondNum}입니다.`);
    console.log(`두 값을 나눈 값은 ${firstNum / secondNum}입니다.`);
  } else {
    result = secondNum / firstNum;

    alert(`두 값을 나눈 값은 ${secondNum / firstNum}입니다.`);
    console.log(`두 값을 나눈 값은 ${secondNum / firstNum}입니다.`);
  }

  return result;
}

//=====================
// %

function namerge() {
  let result;

  if (firstNum >= secondNum) {
    result = firstNum % secondNum;

    alert(`두 값을 나눈 값은 ${firstNum % secondNum}입니다.`);
    console.log(`두 값을 나눈 값은 ${firstNum % secondNum}입니다.`);
  } else {
    result = secondNum % firstNum;

    alert(`두 값을 나눈 값은 ${secondNum % firstNum}입니다.`);
    console.log(`두 값을 나눈 값은 ${secondNum % firstNum}입니다.`);
  }

  return result;
}

//두 값 표시하기

// function displayfbox() {
//   let str = document.getElementsByClassName("fbox")[0];
//   str.innerText = `${firstNum}`;
// }

// function displaysbox() {
//   let str = document.getElementsByClassName("sbox")[0];
//   str.innerText = `${secondNum}`;
// }

// displayfbox();
// displaysbox();

// let num1,num2;
// function divide(a){
//   a = parseInt(a);
//   if(num1 == undefined){
//     num1 = a;

//   }
//   else{
//     num2 = a;
//   }
// }
