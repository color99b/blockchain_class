document.getElementById("signUpSubmit").onclick = async function (e) {
  try {
    document.getElementById("signUpZone").classList.remove("on");

    const data = await axios.post("/api/user/regist", {
      id: document.forms["sginUpForm"].signUpID.value,
      pw: document.forms["sginUpForm"].signUpPW.value,
      name: document.forms["sginUpForm"].signUpName.value,
      age: document.forms["sginUpForm"].signUpAge.value,
      gender: document.querySelector('input[name="gender"]:checked').value,
    });
  } catch (err) {
    console.log(err);
  }
};
document.getElementById("sign-up").onclick = async function (e) {
  e.preventDefault();
  document.getElementById("signUpID").value = "";
  document.getElementById("signUpPW").value = "";
  document.getElementById("signUpName").value = "";
  document.getElementById("signUpAge").value = "";

  document.getElementById("signUpZone").classList.toggle("on");
};

document.getElementById("sginUpForm").onsubmit = async function (e) {
  e.preventDefault();
};

document.getElementById("login").onclick = async function (e) {
  e.preventDefault();

  const data = await axios.post("/api/user/login", {
    id: document.forms["loginForm"].id.value,
    pw: document.forms["loginForm"].pw.value,
  });
  console.log(data.data.age);
  if (data.data.age) {
    document.getElementById("myInfo").classList.toggle("on");
    document.getElementById("logOut").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("infoID").innerHTML =
      data.data.id + "님 어서오세요! XD";

    document.getElementById("infoName").innerText = "name: " + data.data.name;
    document.getElementById("infoAge").innerText = "age: " + data.data.age;
    document.getElementById("infoGender").innerText =
      "gender: " + data.data.gender;
  } else {
    alert("존재하지 않는 회원입니다.");
  }
};

document.getElementById("logOut").onclick = function (e) {
  e.preventDefault();
  document.getElementById("logOut").style.display = "none";
  document.getElementById("login").style.display = "block";
  document.getElementById("myInfo").classList.remove("on");
};

document.getElementById("board-add").onsubmit = async function (e) {
  e.preventDefault();

  if (!e.target["board-text"].value) {
    e.target["board-text"].focus();
    return;
  }

  try {
    const userData = await axios.post("/api/user/login", {
      id: document.forms["sginUpForm"].signUpID.value,
      pw: document.forms["sginUpForm"].signUpPW.value,
      name: document.forms["sginUpForm"].signUpName.value,
      age: document.forms["sginUpForm"].signUpAge.value,
      gender: document.querySelector('input[name="gender"]:checked').value,
    });

    const data = await axios.post("/api/board/add", {
      title: e.target["board-title"].value,
      text: e.target["board-text"].value,
      uptime: new Date().toLocaleString(),
      issuer: userData.data.name,
    });
    if (data.data.status == 200) {
      e.target["board-title"].value = "";
      e.target["board-text"].value = "";
    } else {
    }
  } catch (err) {
    console.log(err);
  }
  getList();
};

const tempData = [
  [
    { title: "arvserv1", text: "9baresrsearvstb" },
    { title: "arvserv2", text: "8baresrsearvstb" },
    { title: "arvserv3", text: "7baresrsearvstb" },
    { title: "arvserv4", text: "6baresrsearvstb" },
    { title: "arvserv5", text: "5baresrsearvstb" },
  ],
  [
    { title: "arvserv6", text: "4baresrsearvstb" },
    { title: "arvserv7", text: "3baresrsearvstb" },
    { title: "arvserv8", text: "2baresrsearvstb" },
    { title: "arvserv9", text: "1baresrsearvstb" },
  ],
];
let maxCount = 1; //총 페이지 수
let count = 0;
let tempCount = 0;
const listElem = document.getElementById("list");
let getList = async function () {
  try {
    const data = await axios.get("/api/board?count=" + count);
    // pageElem.innerHTML = "";
    maxCount = data.data.maxCount;
    console.log(data.data);
    // for (let i = 0; i < maxCount; ++i) {
    //   const tempLi = document.createElement("li");
    //   tempLi.innerText = i + 1;
    //   tempLi.onclick = function (e) {
    //     count = i;
    //     pageElem.getElementsByClassName("now")[0].classList.remove("now");
    //     tempLi.classList.add("now");
    //     getList();
    //   };

    //   if (count === i) {
    //     tempLi.classList.add("now");
    //   }

    //   pageElem.append(tempLi);
    // }
    listElem.innerHTML = "";
    data.data.list.forEach((data, index) => {
      const tempLi = document.createElement("li");
      const tempTitle = document.createElement("div");
      tempTitle.classList.add("title");
      tempTitle.onclick = function (e) {
        tempText.classList.toggle("on");
        tempImg.classList.toggle("on");
      };
      const tempH3 = document.createElement("h3");
      const tempText = document.createElement("div");
      tempText.classList.add("text");

      const tempImg = document.createElement("img");
      tempImg.classList.add("textSee");
      const tempP = document.createElement("p");
      const tempTextArea = document.createElement("textarea");
      const tempBtnBox = document.createElement("div");
      const tempDelbtn = document.createElement("img");
      const tempEditbtn = document.createElement("img");
      const tempCancelBtn = document.createElement("img");
      const tempIssuer = document.createElement("span");
      const tempTime = document.createElement("span");

      tempTitle.onclick = function (e) {};

      tempImg.src = "./imgs/angle-up-solid.svg";
      tempImg.alt = "list-item-btn";
      tempH3.innerText = data.title;
      tempIssuer.innerText = data.issuer;
      tempTime.innerText = data.uptime;
      console.log(data);

      tempH3.append(tempIssuer);
      tempH3.append(tempTime);

      tempP.innerText = data.text;
      tempTextArea.value = data.text;

      tempDelbtn.src = "./imgs/skull-crossbones-solid.svg";
      tempDelbtn.alt = "delete-btn";

      tempEditbtn.src = "./imgs/hand-scissors-solid.svg";
      tempEditbtn.alt = "edit-btn";

      tempCancelBtn.src = "./imgs/xmark-solid.svg";
      tempCancelBtn.alt = "cancel-btn";

      tempCancelBtn.onclick = function (e) {};

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

getList();
