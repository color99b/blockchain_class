const list = document.getElementById("list");
const getList = function () {
  list.innerHTML = "";
  axios.get("/api/list").then((data) => {
    data.data.list.forEach((element) => {
      if (list.length > 1) {
        let idx = list[length];
      }
      const tempElem = document.createElement("li");
      const delBox = document.createElement("input");
      const delButton = document.createElement("button");
      delButton.className = "delButton";
      delButton.innerText = "delete";
      delBox.className = "delBox";
      delBox.type = "checkbox";
      tempElem.classList.add("list-group-item");
      tempElem.innerHTML = `${element.text}`;
      list.appendChild(tempElem);
      tempElem.append(delBox);
      tempElem.append(delButton);

      delButton.onclick = function () {
        tempElem.remove();
        axios.delete("/api/list" + idx);
      };
    });
  });
};

getList();

document.forms["issue-form"].onsubmit = function (e) {
  e.preventDefault(); // << 기본 이벤트를 막는다.
  const reset = document.getElementById("issue");
  // XMLHttpRequest => fetch/ajax => axios
  // http 모듈 => express

  axios
    .post("/api/list", {
      name: document.forms["issue-form"]["issue"].value,
      // test: 1,
      // str: "김재일",
    })
    .then((data) => {
      getList();
    });

  // axios
  //   .delete("/api/list", {
  //     // 삭제
  //   })
  //   .then((data) => {
  //     axios.delete();
  //   });
  // axios
  //   .put("/api/list", {
  //     // 수정
  //   })
  //   .then((data) => {});

  reset.value = null;
};
