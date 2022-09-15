const list = document.getElementById("todo-list"); // 우측항으로만 쓰면 만날때마다 todo list를 찾게되므로 연산시간이 길어진다.
//최대한 연산시간을 줄여주기위해 아예 맨위에 선언한것.

function deleteItem(num) {
  //   list.children[num].classList.add("delete");
  //list의 자식들 중에 num번째 자식에 'delete' 라는 클래스를 추가한다.

  let starIdx = 0;
  let endIdx = 0;
  let tempHTML = list.innerHTML;
  for (let i = 0; i < num; ++i) {
    starIdx = tempHTML.slice(starIdx + 4).indexOf("<li>");
  }
  endIdx = tempHTML.slice(starIdx + 4).indexOf("<li>");
  tempHTML = list.innerHTML;
  list.innerHTML = tempHTML.slice(0, starIdx) + tempHTML.slice(endIdx + 4);
}

document.getElementById("todo-add").onclick = () => {
  const input = document.getElementById("todo-input");
  if (!input.value) return;
  list.innerHTML += `<li>${input.value}<button onclick="deleteItem(${list.children.length})">삭제</button></li>`;
  input.value = "";
};
