let num = 0;

function change() {
  document.getElementById("change").innerHTML = `<img src="${
    ++num % 3
  }.jpg" alt ="change"/>`;
}

//getElementBy 엘리먼트를 받아오는 도큐먼트. by다음 아이디인지 네임인지 스타일인지
// 고르고 안에 해당하는 이름.
// innerHTML 은 여는 태그와 닫는 태그 사이의 텍스트이다.
