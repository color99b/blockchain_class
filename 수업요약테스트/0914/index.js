console.log(document.body.children);
// children은 엘리먼트의 자식 엘리먼트들을 모두 가져온다. 호출한다.

console.log(document.body.childNodes);
//childNodes 는 자식 노드들을 모두 가져온다.

//엘레먼트는 태그로 감싸진 친구들의 정보를 가져오는것
// 노드는 태그로 감싸져있지 않은 친구들의 정보도 가져오는것.

console.log(document.getElementById("parent").childNodes);
//텍스트와 엘레먼트포함

console.log(document.getElementById("parent").parentElement);
// parent의 부모 엘레먼트는 body

console.log(document.getElementById("parent").firstElementChild);

console.log(document.getElementById("parent").lastElementChild);

// 엘레먼트와 노드의 차이 .? node는 모든 dom의 객체이고 element는 노드의 유형중 하나이다.

// element는 노드 객체를 상속받는 객체, Element_node 를 의미한다.
// 텍스트 노드는 element 에 포함되지 않는다.
// 그럼 텍스트 노드를 가져올 수 있는 노드가 엘레먼트보다 작게 쪼개진 개념이 아닌가? 했지만.
// 포유류 - 원숭이 느낌. 사람은 원숭이는 아니지만 포유류인것처럼 텍스트 노드는 엘레먼트는 아니지만 노드에 포함되는것

console.log(document.getElementById("child1").nextElementSibling);
// 다음 형제 엘리먼트를 가져온다.
console.log(document.getElementById("child1").previousElementSibling);
// 이전 형제 엘리먼트를 가져온다. (닫힌 태그가 앞에 있어야 불러올 수 있음)

let children = [...document.getElementById("parent").children];
// 얘는 배열이 아니라 컬렉션이라고 한다.
// 컬렉션을 ...으로 분해하고 [] 로 묶어서 배열로 치환.
children.forEach((elem) => {
  console.log(elem);
});

// get elements 로 배열마냥 애들을 가져왔다고 해도 배열로 저장되는게 아니라
// html collection 이라고 저장됨.
console.log(document.getElementsByClassName("child"));

children = document.getElementsByClassName("child");
console.log(children);

console.log(children[0]);

children[0].onclick = () => {
  alert("온클릭");
};

function onClick(num) {
  console.log(num + "번째 자식을 클릭했어!");
}

//add, toggle, contains 중요함.
[...children].forEach((elem, index) => {
  elem.onmouseover = () => {
    elem.classList.toggle("hover");
  };

  elem.onmouseleave = () => {
    elem.classList.toggle("hover");
  };

  elem.onclick = () => {
    //여기가 클래스 활용의 꽃이다. 네이버 더보기로 추가적으로 나오는 창을 클릭하면 보여주고 아니면 안보여주고

    // 클래스를 껐다 켰다 하면서 데이터를 바꾸지 않아도 페이지 변화를 줄 수 있다.
    onClick(index + 1);
    console.log(elem.innerHTML);
    // if (elem.classList.contains("on")) elem.classList.remove("on");
    // else elem.classList.add("on");
    //classlist는 엘레먼트의 클래스를 관리하는 객체이다.
    //add 메서드는 클래스를 추가한다.
    //contains 메서드는 매개변수로 전달된 문자열이 클래스에 포함되어 있는지를 확인한다.
    elem.classList.toggle("on");
    //위의 if else 문을 한줄로. 클래스가 있으면 없애고, 없으면 붙인다.
  };
});
// forEach 매개변수함수에 매개변수로 (item, index) 형식으로 받을 수 있으며
// item은 배열의 아이템 하나하나, index는 해당 아이템의 인덱스 번호.
// 순서대로 하나하나 배열안의 값을 뿌려준다. 유일한 단점 아이템 다 넣을때까지 멈출수 없다.

const tempArr = ["a", "b", "c"];

tempArr.forEach((item, index) => {
  console.log(item + " : " + index + " 번째 아이템");
});

for (let index = 0; index < tempArr.length; ++index) {
  const item = tempArr[index];

  console.log(item + " : " + index + " 번째 아이템");
}

//위 두 코드는 똑같다.

console.log(document.getElementById("parent").innerHTML);
// html 기준으로 텍스트를 가져온다.
console.log(document.getElementById("parent").innerText);
// html 태그 등등등 제외한 텍스트를 가져온다.

document.getElementById("btn").onclick = () => {
  console.log(document.getElementById("BTS").value);
  //BTS에 입력된 값을 로그로 출력한다.
  document.getElementById("btn").style.backgroundColor = "#ff0000";

  //카멜 표기법
};
