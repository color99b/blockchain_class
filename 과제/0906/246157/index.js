function printNum() {
  let numKind = prompt(`짝수인지 홀수인지 정하시오
    0.짝수 / 1. 홀수
`);
  while (!(numKind == "0" || numKind == "1")) {
    numKind = "";
    numKind = prompt(`0.짝수 / 1. 홀수
    0과 1중에만 입력해주세요.
    
    `);
  }

  let numNumber = prompt(`수열의 몇번째 까지 출력할 것인지 입력하시오`);
  while (isNaN(parseInt(numNumber))) {
    numNumber = prompt(`숫자만 입력하세요`);
  }
  let num1 = 2;
  let num2 = 1;
  for (let i = 1; i <= numNumber; i++) {
    if (numKind == "0") {
      console.log(num1);
      num1 += 2;
    } else if (numKind == "1") {
      console.log(num2);

      num2 += 2;
    }
  }
}

printNum();
//지역변수 const로 함수에서만 쓰고 버리면서 메모리 최적화
