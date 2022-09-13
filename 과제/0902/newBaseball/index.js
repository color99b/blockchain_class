let comSel = [];
let count = 0;
const comSet = new Set();
const balls = document.getElementById("balls");
// 배열은 배열인데 내부에서 중복을 처리해주는 것(배열이랑은 다르다,
// 사용할때는 new Set()을 변수에 정의하여 사용한다 (let arr = []; 랑 똑같음)
//clear(), add(), size

function reset() {
  comSel = [];
  comSet.clear();
  //컴퓨터 선택을 초기화

  count = 0;
  const playerSelTr = (document.getElementById("player-sel").innerHTML =
    "<th>Player Select</th>");
  const countTr = (document.getElementById("count").innerHTML =
    "<th>Count</th>");
  const strikeTr = (document.getElementById("strike").innerHTML =
    "<th>Strike</th>");
  const ballTr = (document.getElementById("ball").innerHTML = "<th>Ball</th>");
  const outTr = (document.getElementById("out").innerHTML = "<th>Out</th>");

  while (comSet.size < 3) {
    comSet.add(parseInt(Math.random() * 10));
    //comSet은 Set 배열이기에 중복되는 수면 알아서 삭제된다.
  }
  //   console.log(comSet);
  comSel = [...comSet];
  // ... 은 스프레드라고한다.
  // 배열, 객체등 연속되는 데이터들을 하나하나 분해한다.
  // [...comSet] 은 comSet의 아이템 하나하나를 분해해서 배열 내에 넣어준다.
  console.log(comSel);
  alert("컴퓨터는 준비를 마쳤다. 맞춰봐라, 애송이");
}

function selectNum() {
  if (!comSel.length) return;
  let playerSel = "";
  let strike = 0;
  let ball = 0;

  const playerSelTr = document.getElementById("player-sel");
  const countTr = document.getElementById("count");
  const strikeTr = document.getElementById("strike");
  const ballTr = document.getElementById("ball");
  const outTr = document.getElementById("out");

  while (playerSel.length !== 3) {
    playerSel = prompt(
      "3개의 수를 입력해라 \n 0으로 시작가능 / 중복 숫자 불가능"
    );
    if (!playerSel) return alert("포기한거냐");
    const tempLength = playerSel.length;

    //플레이어가 입력한 수를 배열로 변환 후 set에 세팅하여 중복을 없앤다.
    playerSel = [...new Set(playerSel.split(""))]
      .map((item) => parseInt(item))
      //중복을 없앤 플레이어의 수를 배열로 변환 후 map을 이용해 정수로 변환시킨다.
      .join("");
    //정수의 배열을 join 메서드를 이용해 하나의 문자열로 변환시킨다.

    if (playerSel.length != tempLength || playerSel.indexOf("NaN") > -1)
      playerSel = "";
    //playerSel 의 길이가 이전(tempLength) 와 다르면 중복된 숫자가 있었던 것이다.
    //때문에 playerSel을 빈값으로 정의한다.
    // playerSel 에 NaN이 있으면 중간에 숫자가 아닌 문자가 있기 때문에.
  }
  strike = ball = 0;
  comSel.forEach((item, index) => {
    //forEach 의 매개변수함수
    if (item == playerSel[index]) strike++;
    //아이템과 playerSel의 index번째 아이템이 같다면 스트라이크 ++
    else if (playerSel.includes(item)) ball++;
    //아이템이 playerSel 에 포함되어 있지 않으면 ball ++;
  });
  playerSelTr.innerHTML += "<td>" + playerSel + "</td>";
  countTr.innerHTML += "<td>" + ++count + "</td>";
  strikeTr.innerHTML += "<td>" + strike + "</td>";
  ballTr.innerHTML += "<td>" + ball + "</td>";
  outTr.innerHTML += "<td>" + (3 - strike - ball) + "</td>";

  //   playerSel = "";
  if (strike === 3) {
    alert(`${count}번 만에 맞추셨네요 ㅋㅋ`);
    comSel = [];
  } else {
    alert(`strike : ${strike}, ball : ${ball}, out : ${3 - strike - ball}`);
  }

  balls();
}

function balls() {
  balls.style.display = "block";
  balls.addEventListener("animationstart");
}

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

for (; numArr.length < 3; ) {
  const tempNum = parseInt(Math.random() * 10);
  console.log(tempNum);
  if (!numArr.includes(tempNum)) numArr.push(tempNum);
}








let number1 = 5;
const number2 = 5;


let number3;

number3 = 3;



