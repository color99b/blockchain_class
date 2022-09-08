function shuffle(arr, count) {
  if (!arr?.length || typeof arr != "object") {
    alert("배열만");
    return "이상한거 넣지말라고";
  }
  for (let i = 0; i < count; i++) {
    const first = parseInt(Math.random() * arr.length);

    const second = parseInt(Math.random() * arr.length);

    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
  }
  return arr;
}

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
