let player = prompt("총 몇명이지? 애송이들 (2명~5명)");
let num;
let end = 0;
let start = 1;
let plus = 0;
let gameset = document.getElementById("gameset");

function game() {
  if (player >= 2 && player <= 5) {
    for (let i = 0; end == 0; i++) {
      if (plus == 0) {
        let count = prompt(`${1}번째 플레이어가 숫자를 선택할 차례다.
            숫자는 3까지 부를 수 있다. 괜히 다른 숫자 넣으면 각오하거라.`);
        if (count > 3 || count < 1) return (gameset.style.display = "block");
        num = parseInt(count);
        alert(`마지막 숫자는 ${num}이다`);
        plus++;
        continue;
      }

      count = prompt(`${i + 1}번째 플레이어가 숫자를 선택할 차례입니다.
            숫자는 ${
              num + 3
            }까지 부를 수 있다. 괜히 다른 숫자 넣으면 각오하거라.`);

      if (count <= num + 3 && count > num) {
        //31이상일때 나오는거 예외처리
        num = parseInt(count);
        alert(`마지막 숫자는 ${num}이다`);
      } else {
        return (gameset.style.display = "block");
      }
      if (i + 1 >= player) i = -1;
      if (num >= 31) {
        return alert(`${i + 1} 번째 플레이어 당첨. 소고기 잘 먹겠습니다. ㅎㅎ`); //수정필요
      }
    }
  } else {
    player = prompt("2~5명만 시작할 수 있다");
    game();
  }
}

game();

//3을 치면 3으로 넘어가고 7을치면 7로 넘어가고
