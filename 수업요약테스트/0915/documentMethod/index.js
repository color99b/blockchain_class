const root = document.getElementById("root");

// root.onload = () => {
//   console.log(i + "번째 div");
// };
// onload 라는 methoㅇ는 로드가 되었는가 확인
//로드가 되었을 때 실행된다 . (dom에 생성됐을때)

root.onwheel = (e) => {
  console.log(e.target);
  //마우스 휠에 대한 메서드
};

document.getElementById("name").onchange = (e) => {
  console.log(e.target.value);
  //e,target은 해당 메서드가 어디서 싱햇되었는지 ( 포커스가 기준이 될수도 있고 마우스의 위치가 기준이 될 수도 있다.)
}; //변경이 완료 되었을 때

document.getElementById("name").oninput = (e) => {
  console.log(e.target.value);
  //e,target은 해당 메서드가 어디서 싱햇되었는지 ( 포커스가 기준이 될수도 있고 마우스의 위치가 기준이 될 수도 있다.)
}; //입력이 완료 되었을 때

document.getElementById("name").addEventListener("click", (e) => {
  console.log("input을 클릭했어");
});

//on 어쩌구 하는 method를 쓰는데 그게 뭐냐
// on***은 전부 이벤트함수라고 부른다.
// 클릭, 키다운, 입력 등 사용자의 입력에 대해서 이벤트가 발생했을 때 실행된다.

for (let i = 0; i < 10; ++i) {
  const tempElem = document.createElement("div");
  //div element 를 생성해서 tempElem 변수에 초기화 한다.
  tempElem.innerHTML = i + "번째 div";
  // tempElem 의 내용을 i번째 디브로 초기화한다.

  root.append(tempElem);
  //root 엘리먼트에 tempElem 엘리먼트를 자식으로 추가한다. (뒤에서 -> 아랫줄추가 / 맨 마지막 자식으로 추가한다.) -> 마지막에 추가한게 제일 아

  //   root.prepend(tempElem);
  // 첫번째 자식으로 추가한다. -> 마지막에 추가한게 제일 위
}

document.getElementById("name").style.backgroundColor = "lightgray";
//html 문서에서 style 속성을 이용해서 inline 형식으로 설정된 스타일과 마찬가지로 적용된다.

//inline 형식으로 style 속성에 설정한 css스타일은 js에서 확인 가능
//css 속성 끝에 !important 를 추가시 무조건 얘가 우선되어 적용된다. 나중에 적용된 스타일을 무시한다.
