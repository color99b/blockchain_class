const comSelect = Math.floor(Math.random) * 10;
const rock = document.createElement("img");
rock.src = "rock.png";
rock.className = "innerPng";
const scissor = document.createElement("img");
scissor.src = "scissor.jpg";
scissor.className = "innerPng";

const paper = document.createElement("img");
paper.src = "paper.png";
paper.className = "innerPng";

const computerBox = document.getElementById("computerBox");
// computerBox.appendChild(rock); 첫번째 자식으로 이미지 넣기
const whatIsSelect = document.getElementById("circle2");
let selectCount = 0;
let viewCount = 0;
let money = 1000;

function coinNum() {
  const moneyBar = document.getElementById("coinNum");
  moneyBar.innerHTML = "&nbsp " + money + " coin";
}

// const startBtn = document.getElementById("starBtn").onclick((e) => {});
// 스타트 버튼 눌렀을때의 활동

function comSelectFunc() {
  if (comSelect == 0 || comSelect == 1 || comSelect == 2) comSelect = rock;
  else if (comSelect == 3 || comSelect == 4 || comSelect == 5)
    comSelect = scissor;
  else comSelect = paper;
}

function inputCoin() {
  selectCount == 10;

  money += 1000;
  coinNum();
}

//플레이어가 선택하면 카운트 ++ , 그 전까진 0
// 선택하지 않았을때까지
function powerOn() {
  coinNum();
  let view = setInterval(() => {
    if (!(selectCount == 0)) return clearInterval(view);
    whatIsSelect.innerHTML = "";
    if (viewCount == 0) {
      num = rock;
      viewCount++;
    } else if (viewCount == 1) {
      num = scissor;
      viewCount++;
    } else {
      num = paper;
      viewCount = 0;
    }

    whatIsSelect.appendChild(num);
    console.log(selectCount);
  }, 100);
}

document.getElementById("insertCoin").onclick = () => {
  inputCoin();
};

function drawTra() {
  let canvas = document.getElementById("gameBar");
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(75.5);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}

drawTra();
