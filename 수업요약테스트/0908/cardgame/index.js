let cards = [];

for (let i = 0; i < 8; i++) {
  cards.push(i + 1);
  cards.push(i + 1);
}

cards = shuffle(cards, 100);
//카드를 섞어줍니다.
console.log(cards);

let firstCardIdx = -1;
let secondCardIdx = -1;

function selectNum(cardNum) {
  console.log("fristCardIdx: " + firstCardIdx);
  console.log("seconCardIdx: " + secondCardIdx);

  const tempElem = document.getElementById("card" + cardNum);
  const firstElem = document.getElementById("card" + firstCardIdx);
  //첫번째 선택한 카드의 태그가 정의된다. 클릭한 디브의 인덱스
  const secondElem = document.getElementById("card" + secondCardIdx);
  //card + 번호로 각각의 태그를 찾는다. 매개변수로 받은 cardNum에는 id의 'card' 뒤에 붙은 숫자와 동일하게 되어 있으며
  //cardNum와 'card' 를 붙여서 id를 찾아온다.

  if (tempElem.innerHTML) return; //뒤집어진 카드는 html에 숫자를 가지니까 그게 있으면 밑의 함수 나가라

  if (firstCardIdx > -1 && secondCardIdx > -1) {
    // 두카드가 모두 선택되었을 때

    if (cards[firstCardIdx] != cards[secondCardIdx]) {
      firstElem.innerHTML = "";
      secondElem.innerHTML = "";
    } //카드가 다르면 다시 뒤집는다
    else {
      firstElem.style.backgroundColor = "red";
      secondElem.style.backgroundColor = "red";
    }
    firstCardIdx = -1;
    secondCardIdx = -1;
    //카드들에 대한 위치 정보를 없앤다.
  }
  if (firstCardIdx < 0) {
    //첫번째 카드를 선택하지 않았는가.
    firstCardIdx = cardNum;
    //첫번째 카드의 index(cards 기준) 을 정의한다.
    tempElem.innerHTML = cards[cardNum];
  } else if (secondCardIdx < 0) {
    //두번째 카드 선택하지 않았는가.
    secondCardIdx = cardNum;
    tempElem.innerHTML = cards[cardNum];
  }
  //    else if (cards[firstCardIdx] != cards[secondCardIdx]) {
  //     firstElem.innerHTML = "";
  //     secondElem.innerHTML = "";
  //     firstCardIdx = -1;
  //     secondCardIdx = -1;
  //   } else {
  //     firstCardIdx = -1;
  //     secondCardIdx = -1;
  //   }

  //찾은 클릭 당한 태그에 내용으로 cards (랜덤으로 배치한 카드들) 중에 cardNum -1번째 (컴퓨터는 숫자를 0부터 시작하기 때문);
}
