const todoList = document.getElementById("list");
const date = new Date();
let getList = function () {
  todoList.innerHTML = "";
  axios.get("/api/list").then((data) => {
    data.data.list.forEach((todo) => {
      const tempElem = document.createElement("li");
      tempElem.classList.add("list-group-item");
      tempElem.innerHTML = `${todo.text} / 등록 시간 : ${new Date(todo.time)}}`;
      todoList.append(tempElem);
    });
  });
};
getList();

document.forms["todo-form"].onsubmit = function (e) {
  e.preventDefault(); //기본 이벤트를 막는다.
  //XMLHttpRequest => fetch/ajax => axios
  //http 모듈 => express

  axios
    .post("/api/add", {
      name: document.forms["todo-form"]["do-name"].value,
      time: date.toLocaleTimeString("ko-kr"),
      //   test: 1,
      //   str: "김재일",
    })
    .then((data) => {
      getList();
    });

  // axios.get(
  //   "/api/add?name=" +
  //     document.forms["todo-form"]["do-name"].value +
  //     "&str=이가원"
  // );
};

// axios.post("라우터", 서버의 req.body) 데이터를 보낸다.
//get 은 눈에 보이는데 post 는 눈에 보이지 않음
// 로그인할 때 아이디 비번 가리도록 post 사용 이런 느낌
