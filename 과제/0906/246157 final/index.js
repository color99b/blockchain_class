let playerSel = [];

function input() {
  playerSel = prompt(`홀수/짝수 여부와 max를 설정해주세요
ex: 짝수50 || 홀수100 `);

  playerSel = [...playerSel];
  playerSel[0] = playerSel[0] + playerSel[1];
  playerSel[1] = "";
  for (let i = 3; i < playerSel.length; i++) {
    playerSel[2] += playerSel[i];
  }

  numKind = playerSel[0];
  numlength = parseInt(playerSel[2]);
}
input();

function printNum() {
  let num1 = 2;
  let num2 = 1;
  for (let i = 1; i <= numlength / 2; i++) {
    if (numKind == "짝수") {
      console.log(num1);
      num1 += 2;
    } else if (numKind == "홀수") {
      console.log(num2);

      num2 += 2;
      if (num2 == numlength) console.log(num2);
    }
  }
}

printNum();

//지역변수 const로 함수에서만 쓰고 버리면서 메모리 최적화
