let number = prompt("몇 짝으로 게임할 것인지 고르시오");

const cards = [];
for (let i = 0; i < 8; i++) {
  cards.push(i + 1);
  cards.push(i + 1);
}
console.log(cards);

for (let i = 0; i < 100; i++) {
  console.log("i :", i);
  const firstCard = parseInt(Math.random() * cards.length);
  console.log("첫번째카드 : ", firstCard);
  //첫번째 카드 선택
  const secondCard = parseInt(Math.random() * cards.length);
  console.log("두번째카드 : ", secondCard);

  //두번째 카드 선택
  const temp = cards[firstCard];
  cards[firstCard] = cards[secondCard];
  cards[secondCard] = temp;

  cards[secondCard] = temp;
}

console.log(cards);
//카드 1~8까지 쌍으로 8페어 16장

function createDiv() {
  for (let i = 0; i < number * 2; i++) {
    const newDiv = document.createElement(`div`);
    newDiv.className = "card";
    const newText = document.createTextNode("시작부터 밑장빼기여?");
    newDiv.appendChild(newText);

    document.body.appendChild(newDiv);
  }
}

function give() {
  for (let i = 0; i < 2 * number; i++) {
    document.getElementsByClassName("card")[i].textContent = `${cards[i]}`;
  }
}

function compare() {}
