// //16개의 카드가 있다. 같은 카드 찾기
// // 같은 카드 2개씩으로 이루어져있고
// // 2개를 선택하면 같은 카드인지 확인후 화면에서 삭제
// //1~8 일수도 a~h 일수도 있다.

// //n의 수를 넣어서 n개의 짝을 만들어서 카드게임 다음주 화요일까지.
// let number = prompt("몇 짝으로 게임할 것인지 고르시오");

// //

// function createDiv() {
//     for(let i=0; num)
//   const newDiv = document.createElement("div");
//   const newText = document.createTextNode("안녕하세요");
//   newDiv.appendChild(newText);
//   document.body.appendChild(newDiv);
// }

// let clickCount = 0; // 2번 클릭해서 비교하게끔
// let c1 = [];
// let c2 = [];
// function card1() {
//   for (let i = 1; c1.length < 8; i++) {
//     cardnum = Math.floor((Math.random() * 777) % 10);
//     if (!c1.includes(cardnum)) c1.push(cardnum);
//   }
// }

// function card2() {
//   for (let i = 1; c2.length < 8; i++) {
//     cardnum = Math.floor((Math.random() * 777) % 10);
//     if (!c2.includes(cardnum)) c2.push(cardnum);
//   }
// }

// // function shuffle(array) {
// //   for (let i = array.length - 1; i > 0; i--) {
// //     const j = Math.floor(Math.random() * (i + 1));
// //     const temp = array[i];
// //     array[i] = array[j];
// //     array[j] = temp;
// //   }
// // }

// card1();
// console.log(c1);
// card2();
// console.log(c2);

// // shuffle(c1);
// createDiv(number);
let number = 8;
let clickCount = 0;
let arr = [];

const cards = [];
for (let i = 0; i < 8; i++) {
  cards.push(i + 1);
  cards.push(i + 1);
}
console.log(cards);

function shuffle() {
  for (let i = 0; i < 100; i++) {
    const firstCard = parseInt(Math.random() * cards.length);

    //첫번째 카드 선택
    const secondCard = parseInt(Math.random() * cards.length);

    //두번째 카드 선택
    const temp = cards[firstCard];
    cards[firstCard] = cards[secondCard];
    cards[secondCard] = temp;

    cards[secondCard] = temp;
  }
}
console.log(cards);

function give() {
  shuffle();
  for (let i = 0; i < 2 * number; i++) {
    arr[i] = document.getElementsByClassName("card")[
      i
    ].textContent = `${cards[i]}`;
  }
}

function clicked() {
  if (clickCount == 0) {
    for (let i = 0; clickCount == 1; i++) {}
  } else if (clickCount == 1) {
  }
}
