document.getElementById("menu-btn").onclick = function (e) {
  document.getElementById("user-input-container").classList.toggle("on");
  document.getElementById("login").classList.toggle("on");
};

document.getElementById("board-add").onsubmit = async function (e) {
  e.preventDefault();
  if (!e.target["board-text"].value) {
    e.target["board-text"].focus();

    return;
  } else {
    console.log(e.target["board-title"].value);
    console.log(e.target["board-text"].value);
  }
  try {
    const userData = await axios.post("/api/user/login", {
      id: document.forms["user-info"].id.value,
      pw: document.forms["user-info"].pw.value,
      name: document.forms["user-info"].name.value,
      gender: document.forms["user-info"].gender.value,
      age: document.forms["user-info"].age.value,
    });

    const data = await axios.post("/api/board/add", {
      title: e.target["board-title"].value,
      text: e.target["board-text"].value,
      uptime: Date.now(),
      issuer: userData.data.idName,
    });
    console.log(data.data);
    if (data.data.status == 200) {
      e.target["board-title"].value = "";
      e.target["board-text"].value = "";
    } else {
      console.error("axios 에러 발생");
    }
  } catch (err) {
    console.log(err);
  }
  getList();
};

//form 안에 있는 button 은 기본적으로 form의 submit을 실행

const tempData = [
  [
    {
      title: "1",
      text: "1",
    },

    {
      title: "2",
      text: "2",
    },
    {
      title: "3",
      text: "3",
    },
    {
      title: "4",
      text: "4",
    },
    {
      title: "5",
      text: "5",
    },
  ],
  [
    {
      title: "6",
      text: "6",
    },
    {
      title: "7",
      text: "7",
    },
    {
      title: "8",
      text: "8",
    },
    {
      title: "9",
      text: "9",
    },
    {
      title: "10",
      text: "10",
    },
  ],
];

let maxCount = 1; //총 페이지 수
let count = 0; // 현재 페이지

const pageElem = document.getElementById("page");

// for (let i = 0; i < maxCount; ++i) {
//   const tempLi = document.createElement("li");
//   tempLi.innerText = i + 1;
//   tempLi.onclick = function (e) {
//     count = i;
//     pageElem.getElementsByClassName("now")[0].classList.remove("now");
//     tempLi.classList.add("now");
//   };
//   if (count === i) {
//     tempLi.classList.add("now");
//   }

//   pageElem.append(tempLi);
// }
let tempCount = 0;
const listElem = document.getElementById("list");
let getList = async function () {
  try {
    const data = await axios.get("/api/board?count=" + count);

    pageElem.innerHTML = "";
    maxCount = data.data.maxCount;
    for (let i = 0; i < maxCount; ++i) {
      const tempLi = document.createElement("li");
      tempLi.innerText = i + 1;
      tempLi.onclick = function (e) {
        count = i;
        pageElem.getElementsByClassName("now")[0].classList.remove("now");
        tempLi.classList.add("now");
        getList();
      };

      if (count === i) {
        tempLi.classList.add("now");
      }

      pageElem.append(tempLi);
    }
    listElem.innerHTML = "";
    data.data.list.forEach((data, index) => {
      const tempLi = document.createElement("li");
      const tempTitle = document.createElement("div");
      const tempH3 = document.createElement("h3");
      const tempText = document.createElement("div");
      const tempImg = document.createElement("img");
      const tempP = document.createElement("p");
      const tempTextArea = document.createElement("textarea");
      const tempBtnBox = document.createElement("div");
      const tempDelbtn = document.createElement("img");
      const tempEditbtn = document.createElement("img");
      const tempCancelBtn = document.createElement("img");
      const tempIssuer = document.createElement("span");
      tempTitle.classList.add("title");
      tempTitle.onclick = function (e) {
        tempText.classList.toggle("on");
        tempImg.classList.toggle("on");
        tempImg.classList.toggle("on");
        tempText.classList.remove("edit");
      };
      tempText.classList.add("text");
      tempImg.src = "./imgs/angle-up-solid.svg";
      tempImg.alt = "list-item-btn";
      tempH3.innerText = data.title;
      tempIssuer.innerText = data.issuer;
      console.log(data.issuer);
      tempIssuer.classList.add("issuer");

      tempH3.append(tempIssuer);

      tempP.innerText = data.text;
      tempTextArea.value = data.text;

      tempBtnBox.classList.add("list-btn-box");
      tempDelbtn.src = "./imgs/skull-crossbones-solid.svg";
      tempDelbtn.alt = "delete-btn";
      tempDelbtn.classList.add("delete");
      tempEditbtn.src = "./imgs/hand-scissors-solid.svg";
      tempEditbtn.alt = "edit-btn";

      tempCancelBtn.src = "./imgs/xmark-solid.svg";
      tempCancelBtn.alt = "cancel-btn";
      tempCancelBtn.classList.add("cancel");
      tempCancelBtn.onclick = function (e) {
        tempText.classList.remove("edit");
      };

      tempDelbtn.onclick = async function (e) {
        try {
          const userissuer = document.getElementsByClassName("issuer");
          const userData = await axios.post("/api/user/login", {
            id: document.forms["user-info"].id.value,
            pw: document.forms["user-info"].pw.value,
            name: document.forms["user-info"].name.value,
            gender: document.forms["user-info"].gender.value,
            age: document.forms["user-info"].age.value,
          });
          for (let i = 0; i < userissuer.length; i++) {
            console.log(userissuer[i].innerText);
            if (userissuer[i].innerText == userData.data.idName) {
              const data = await axios.post("/api/board/delete", {
                count,
                num: index,
              });
              getList();
            }
          }
        } catch (err) {
          console.log(err);
        }
      };

      tempEditbtn.onclick = async function (e) {
        if (tempText.classList.contains("edit")) {
          try {
            const data = await axios.post("/api/board/update", {
              count,
              num: index,
              text: tempTextArea.value,
              time: Date.now(),
            });

            getList();
            console.log(data.data);
          } catch (err) {
            console.log(err);
          }
        } else {
          tempTextArea.value = data.text;
          tempText.classList.add("edit");
        }
      };

      tempBtnBox.append(tempEditbtn);
      tempBtnBox.append(tempDelbtn);
      tempBtnBox.append(tempCancelBtn);

      tempTitle.append(tempH3);
      tempTitle.append(tempImg);
      tempText.append(tempP);
      tempText.append(tempTextArea);
      tempText.append(tempBtnBox);
      tempLi.append(tempTitle);
      tempLi.append(tempText);
      listElem.append(tempLi);
    });
  } catch (err) {
    console.log(err);
  }
};

// axios.post("/api/board/add").then((data) => {
//   console.log(data);
// });
getList();
const boardService = document.getElementById("board-add");

document.getElementById("sign-in").onclick = async function (e) {
  e.preventDefault();
  const data = await axios.post("/api/user/login", {
    id: document.forms["user-info"].id.value,
    pw: document.forms["user-info"].pw.value,
    name: document.forms["user-info"].name.value,
    gender: document.forms["user-info"].gender.value,
    age: document.forms["user-info"].age.value,
  });
  console.log(data.data);
  if (data.data.idName) {
    document.getElementById("user-name").innerText =
      data.data.idName + " 님 어서오세요 XD";

    document.getElementById("sign-in").style.display = "none";
    document.getElementById("sign-up").style.display = "none";
    boardService.style.display = "block";

    document.getElementById("logOut").style.display = "block";
    document.getElementById("nickname").innerText =
      "nickname: " + data.data.idName;

    document.getElementById("age").innerText = "age: " + data.data.age;

    document.getElementById("gender").innerText = "gender: " + data.data.gender;
  }
};
document.getElementById("sign-up").onclick = async function (e) {
  e.preventDefault();
  const data = await axios.post("/api/user/regist", {
    id: document.forms["user-info"].id.value,
    pw: document.forms["user-info"].pw.value,
    name: document.forms["user-info"].name.value,
    gender: document.forms["user-info"].gender.value,
    age: document.forms["user-info"].age.value,
  });

  document.getElementById("sign-in").style.display = "block";
  document.getElementById("name").style.display = "none";
  document.getElementById("myInfo").style.display = "none";

  // document.forms["user-info"].id.value =
  //   document.forms["user-info"].pw.value =
  //   document.forms["user-info"].name.value =
  //     "";
};

document.getElementById("logOut").onclick = async function (e) {
  e.preventDefault();

  document.getElementById("user-name").innerText = "";

  document.getElementById("sign-in").style.display = "block";
  document.getElementById("sign-up").style.display = "none";
  document.getElementById("sign-up-button").style.display = "block";

  boardService.style.display = "none";

  document.getElementById("logOut").style.display = "none";

  document.forms["user-info"].id.value =
    document.forms["user-info"].pw.value =
    document.forms["user-info"].name.value =
      "";
};

document.getElementById("sign-up-button").onclick = async function (e) {
  e.preventDefault();

  document.getElementById("sign-up-button").style.display = "none";
  document.getElementById("sign-up").style.display = "block";
  document.getElementById("sign-in").style.display = "none";
  document.getElementById("name").style.display = "block";
  document.getElementById("myInfo").style.display = "block";
};

let blockService = function () {
  boardService.style.display = "none";
};

blockService();
