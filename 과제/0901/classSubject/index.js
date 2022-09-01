let firstNum = 0;
let secondNum = 0;

//더하기===================================================
function fNumPlus() {
  firstNum++;
  console.log(`현재의 firstNum의 값은 : ${firstNum} 입니다.`);
  return firstNum;
}
function sNumPlus() {
  secondNum++;
  console.log(`현재의 secondNum의 값은 : ${secondNum} 입니다.`);
  return secondNum;
}

function resultPlus() {
  return console.log(`두 값을 더한 값은 : ${firstNum + secondNum} 입니다.`);
}

//빼기 ===================================================
function fNumMius() {
  firstNum--;
  if (firstNum < 0) {
    firstNum = 0;
    console.log(` "-" 가 되기때문에 ${firstNum}으로 초기화 되었습니다.`);
  } else {
    console.log(`현재의 firstNum의 값은 : ${firstNum} 입니다.`);
  }
  return firstNum;
}
function sNumMius() {
  secondNum--;

  if (secondNum < 0) {
    secondNum = 0;
    console.log(` "-" 가 되기때문에 ${secondNum}으로 초기화 되었습니다.`);
  } else {
    console.log(`현재의 secondNum의 값은 : ${secondNum} 입니다.`);
  }
  return secondNum;
}

function resultMius() {
  if (firstNum >= secondNum) {
    console.log(`두 값을 뺀 값은 : ${firstNum - secondNum} 입니다.`);
  } else console.log(`두 값을 뺀 값은 : ${secondNum - firstNum} 입니다.`);

  return;
}

//=====================================================================
//초기화
function reset() {
  firstNum = 0;
  secondNum = 0;
  console.log(`두 상자의 값 모두 0으로 초기화 되었습니다.`);
}

//===================
//두 값 표시하기

function displayfbox() {
  let str = document.getElementsByClassName("fbox")[0];
  str.innerText = `asd${firstNum}`;
}

function displaysbox() {
  let str = document.getElementsByClassName("sbox")[0];
  str.innerText = `${secondNum}`;
}

displayfbox();
displaysbox();
