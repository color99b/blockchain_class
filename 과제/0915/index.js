const rock = document.createElement("img");
let comSelect;
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
const wins = document.getElementById("wins");
const wins2 = document.getElementById("wins2");
const lose = document.getElementById("lose");
const begim = document.getElementById("begim");

function coinNum() {
  const moneyBar = document.getElementById("coinNum");
  moneyBar.innerHTML = "&nbsp " + money + " coin";
}

// const startBtn = document.getElementById("starBtn").onclick((e) => {});
// 스타트 버튼 눌렀을때의 활동

//플레이어가 선택하면 카운트 ++ , 그 전까진 0
// 선택하지 않았을때까지
//컴퓨터의 선택

let view;
function randomSel() {
  view = setInterval(() => {
    if (!(selectCount == 0)) return clearInterval(view);
    whatIsSelect.innerHTML = "";
    if (viewCount == 0) {
      num = rock;
      viewCount++;
      comSelect = "rock";
    } else if (viewCount == 1) {
      num = scissor;
      viewCount++;
      comSelect = "scissor";
    } else {
      num = paper;
      viewCount = 0;
      comSelect = "paper";
    }

    whatIsSelect.appendChild(num);
  }, 100);
}
// let randomSel = setInterval(view(), 500);

function inputCoin() {
  selectCount == 10;

  money += 1000;
  coinNum();
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

//플레이어의 선택
let playerSelect = function (playerSel) {
  if (comSelect == playerSel) {
    console.log("비겼다 + 비겼다에 불켜기 함수로 넘어가기");
    begim.style.backgroundColor = "aqua";
  } else if (comSelect == "scissor") {
    if (playerSel == "paper") {
      console.log("졌다 + 졌다에 불켜기 함수로 넘어가기");
      lose.style.backgroundColor = "yellow";
    } else {
      console.log("이겼다 + 이겼을때함수로 넘어가기");
      wins.style.backgroundColor = "white";
      wins2.style.backgroundColor = "white";
    }
  } else if (comSelect == "rock") {
    if (playerSel == "paper") {
      console.log("이겼다 + 이겼을때함수로 넘어가기");
      wins2.style.backgroundColor = "white";
      wins.style.backgroundColor = "white";
    } else {
      console.log("졌다 + 졌다에 불켜기 함수로 넘어가기");
      lose.style.backgroundColor = "yellow";
    }
  } else {
    if (playerSel == "scissor") {
      console.log("이겼다 + 이겼을때함수로 넘어가기");
      wins2.style.backgroundColor = "white";
      wins.style.backgroundColor = "white";
    } else {
      console.log("졌다 + 졌다에 불켜기 함수로 넘어가기");
      lose.style.backgroundColor = "yellow";
    }
  }
};

function winEffect() {}

let playerRock = (document.getElementById("rock").onclick = () => {
  playerSelect("rock");
  clearInterval(view);
});
let playerScissor = (document.getElementById("scissor").onclick = () => {
  playerSelect("scissor");
  clearInterval(view);
});
let playerPaper = (document.getElementById("paper").onclick = () => {
  playerSelect("paper");
  clearInterval(view);
});

drawTra();
playerRock;
playerPaper;
playerScissor;

function powerOn() {
  coinNum();
  randomSel();
}
