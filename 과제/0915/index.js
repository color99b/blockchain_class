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
const coinAdd = document.createElement("img");
coinAdd.className = "addCoin";
coinAdd.src = "coin2.png";
const jackpot = document.createElement("img");
jackpot.src = "jackpot.png";
jackpot.className = "jackpot";
const jackpot2 = document.createElement("img");
jackpot2.src = "jackpot.png";
jackpot2.className = "jackpot2";
const bbung = document.createElement("img");
bbung.src = "bbung.png";
bbung.className = "bbung";

let isCheck = false;
let btnId = document.querySelectorAll(".playerSelect");
const computerBox = document.getElementById("computerBox");
// computerBox.appendChild(rock); 첫번째 자식으로 이미지 넣기
const whatIsSelect = document.getElementById("circle2");
const coinEquiv = document.getElementById("circle");
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
btnProtect(isCheck);
// const startBtn = document.getElementById("starBtn").onclick((e) => {});
// 스타트 버튼 눌렀을때의 활동

//플레이어가 선택하면 카운트 ++ , 그 전까진 0
// 선택하지 않았을때까지
//컴퓨터의 선택

let view;
let pickture;
function randomSel(speed) {
  clearInterval(view);
  view = setInterval(() => {
    if (!(selectCount == 0)) return clearInterval(view);
    whatIsSelect.innerHTML = "";
    if (viewCount == 0) {
      pickture = rock;
      viewCount++;
      comSel = "rock";
    } else if (viewCount == 1) {
      pickture = scissor;
      viewCount++;
      comSel = "scissor";
    } else {
      pickture = paper;
      viewCount = 0;
      comSel = "paper";
    }
    comSelect = comSel;
    whatIsSelect.appendChild(pickture);
  }, speed);
}

// let randomSel = setInterval(view(), 500);

function inputCoin() {
  selectCount == 10;
  const add = document.getElementById("coinAdd");
  add.appendChild(coinAdd);
  money += 1000;
  coinNum();

  setTimeout(() => {
    const add = document.getElementById("coinAdd");
    add.removeChild(coinAdd);
  }, 1000);
}

document.getElementById("insertCoin").onclick = () => {
  inputCoin();
};

//플레이어의 선택
let playerSelect = function (playerSel) {
  comSelect = "rock";
  setTimeout(() => {
    if (comSelect == playerSel) {
      console.log("비겼다 + 비겼다에 불켜기 함수로 넘어가기");
      begimEffect();
    } else if (comSelect == "scissor") {
      if (playerSel == "paper") {
        console.log("졌다 + 졌다에 불켜기 함수로 넘어가기");
        loseEffect();
      } else {
        console.log("이겼다 + 이겼을때함수로 넘어가기");
        winEffect();
        winEffect2();
      }
    } else if (comSelect == "rock") {
      if (playerSel == "paper") {
        console.log("이겼다 + 이겼을때함수로 넘어가기");
        winEffect();
        winEffect2();
      } else {
        console.log("졌다 + 졌다에 불켜기 함수로 넘어가기");
        loseEffect();
      }
    } else {
      if (playerSel == "scissor") {
        console.log("이겼다 + 이겼을때함수로 넘어가기");
        winEffect();
        winEffect2();
      } else {
        console.log("졌다 + 졌다에 불켜기 함수로 넘어가기");
        loseEffect();
      }
    }
  }, 300);
};

let winsEff;
// 이겼을 때 효과
function winEffect() {
  let winsEff;
  setTimeout(() => {
    winsEff = setInterval(() => {
      if (wins.className == "winning") {
        wins.className = "";
        wins2.className = "";
      } else if (wins.className == "") {
        wins.className = "winning";
        wins2.className = "winning";
      }
    }, 60);
  }, 000);

  setTimeout(() => {
    clearTimeout(winsEff);
  }, 1500);
}

let onCheck;

function onCheck2(i) {
  // onCheck = setInterval(() => {

  // }, 1000);

  setTimeout(() => prevRullet.classList.remove("rullet"), 800);
}
let j = Math.floor(Math.random() * 14);

let k = j + 1;

let winEff2;
let winEff1;

function winEffect2() {
  clearInterval(winEff2);
  clearInterval(winEff1);
  const rullets = document.querySelectorAll("#line_item");
  winEff1 = setInterval(() => {
    if (j == 15) {
      j = 0;
    }
    rullets[j].classList.add("rullet");
    j++;
    console.log(`${j}번째`);
    setTimeout(() => {
      rullets[k - 1].classList.remove("rullet");
      if (k == 15) {
        k = 0;
      }
      k++;
      // console.log(`${k}번쨰`);
    }, 60);
  }, 80);

  setTimeout(() => {
    clearInterval(winEff1);
    winEff2 = setInterval(() => {
      if (j == 15) j -= 1;
      rullets[j].classList.add("rullet");

      setTimeout(() => {
        rullets[j].classList.remove("rullet");
      }, 100);
    }, 150);
  }, 3000);

  setTimeout(() => {
    clearInterval(winEff2);

    if (rullets[j].innerText === "꽝") {
      whatIsSelect.appendChild(bbung);
      setTimeout(() => {
        whatIsSelect.removeChild(bbung);
      }, 2000);
      return;
    } else if (
      rullets[j].innerText === "20" ||
      rullets[j].innerText === "17" ||
      rullets[j].innerText === "10"
    ) {
      whatIsSelect.appendChild(jackpot);
      whatIsSelect.appendChild(jackpot2);

      setTimeout(() => {
        whatIsSelect.removeChild(jackpot);
        setTimeout(() => {
          whatIsSelect.removeChild(jackpot2);
        }, 500);
      }, 1500);
    }
    money += parseInt(rullets[j].innerText) * 100;
    console.log(parseInt(rullets[j].innerText));
    coinNum();
  }, 5000);
  setTimeout(() => ClickProtect("false"), 5000);
}

//졌을때 효과
function loseEffect() {
  let losing;
  setTimeout(() => {
    losing = setInterval(() => {
      if (lose.className == "losing") {
        lose.className = "";
      } else if (lose.className == "") lose.className = "losing";
    }, 60);
  }, 000);

  setTimeout(() => {
    clearTimeout(losing);
  }, 1500);

  setTimeout(() => randomSel(200), 2500);
  setTimeout(() => ClickProtect("false"), 2500);
}

//비겼을 때 효과
function begimEffect() {
  let begimming;
  setTimeout(() => {
    begimming = setInterval(() => {
      if (begim.className == "begimming") {
        begim.className = "";
      } else if (begim.className == "") begim.className = "begimming";
    }, 60);
  }, 0);

  setTimeout(() => {
    clearTimeout(begimming);
  }, 1500);

  setTimeout(() => randomSel(200), 2500);
  setTimeout(() => ClickProtect("false"), 2500);
}

// function playerOnclick(playerClicked) {
//   let playerClick = document.getElementById(playerClicked);
//   playerClick.onclick = () => {
//     play();
//     setTimeout(() => {
//       playerSelect("rock");
//     }, 2300);

//     randomSel(10);

//     setTimeout(() => randomSel(100), 1000);

//     setTimeout(() => clearInterval(view), 2000);
//   };
// }

let clicked = "true";

function playerOnclick(playerClicked) {
  if (money <= 0) return alert(`현금을 투입하여 주십시오`);
  ClickProtect(clicked);
  play();

  setTimeout(() => {
    playerSelect(playerClicked);
  }, 2300);

  randomSel(10);

  setTimeout(() => randomSel(100), 1000);

  setTimeout(() => clearInterval(view), 2000);
}

let playerRock = (document.getElementById("rock").onclick = () => {
  playerOnclick("rock");
});
let playerScissor = (document.getElementById("scissor").onclick = () => {
  playerOnclick("scissor");
});
let playerPaper = (document.getElementById("paper").onclick = () => {
  playerOnclick("paper");
});
playerPaper;
playerScissor;

function powerOn() {
  coinNum();
  if (isCheck == false) {
    randomSel(200);
    isCheck = true;

    btnProtect(isCheck);
  }
  document.getElementById("powerBtn").setAttribute("disabled", true);
}

// 수도코드
// 1. 버튼 하나하나 querySelector로 가져온다.
// 2. 변수 하나를 설정해서 power를 누르는 순간 true or false로 변경 => isCheck
// 3. if(isCheck === true) 1번에서 가져온 태그들의 css (pointer-events: none, cursor: not-allowed)으로 설정

function btnProtect(isCheck) {
  if (isCheck == false) {
    for (let i = 0; i < btnId.length; i++) {
      btnId[i].style.pointerEvents = "none";
      btnId[i].style.cursor = "not-allowed";
    }
  } else if (isCheck == true) {
    for (let i = 0; i < btnId.length; i++) {
      btnId[i].style.pointerEvents = "auto";
      btnId[i].style.cursor = "pointer";
    }
  }
}

function ClickProtect(playerisClicked) {
  if (playerisClicked === "true") {
    for (let i = 0; i < btnId.length; i++) {
      btnId[i].style.pointerEvents = "none";
      btnId[i].style.cursor = "not-allowed";
    }
  } else if (playerisClicked === "false") {
    for (let i = 0; i < btnId.length; i++) {
      btnId[i].style.pointerEvents = "auto";
      btnId[i].style.cursor = "pointer";
    }
  }
}

function play() {
  money -= 100;
  coinNum();
}
