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
    document.getElementById("tempZone").innerText = data.data.name;
    document.getElementById("loginBoard").style.opacity = "1";
  } else {
    alert("존재하지 않는 회원입니다.");
  }
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
};
const chat = document.getElementById("chat");
const chatBtn = document.getElementById("chatBtn");
const chatZone = document.getElementById("chatZone");
function socket() {
  const socket = io();

  socket.on("message", async (data, who) => {
    createChat(data.text, who.who);

    const chatData = await axios.post("/api/chatLog/", {
      who: document.getElementById("tempZone").innerText,
      text: chat.value,
    });
  });

  socket.on("disconnect1", (data) => {});

  socket.on("exit", (data) => {
    if (document.getElementById("tempZone").innerText) {
      document.getElementById("board").style.display = "flex";
      document.getElementById("loginBoard").style.display = "none";
      const whoWrite = document.createElement("div");
      whoWrite.innerText = `${data.who}님이 퇴장하셨습니다.`;
      chatZone.appendChild(whoWrite);
    }
  });

  socket.on("open", async (data) => {
    console.log(data);
    if (document.getElementById("tempZone").innerText) {
      document.getElementById("board").style.display = "flex";
      document.getElementById("loginBoard").style.display = "none";
      const whoWrite = document.createElement("div");
      whoWrite.innerText = `${data.who}님이 입장하셨습니다.`;
      chatZone.appendChild(whoWrite);
    }
  });

  document.getElementById("open").onclick = () => {
    if (!document.getElementById("tempZone").innerText) {
      return alert("로그인후 이용바랍니다");
    }
    socket.emit("open", { who: document.getElementById("tempZone").innerText });
  };

  document.getElementById("logOut").onclick = function (e) {
    e.preventDefault();

    socket.emit("exit", { who: document.getElementById("tempZone").innerText });
    document.getElementById("logOut").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("myInfo").classList.remove("on");
    document.getElementById("tempZone").innerText = "";
    document.getElementById("board").style.display = "none";
    document.getElementById("loginBoard").style.display = "flex";
  };

  chatBtn.onclick = () => {
    if (!document.getElementById("tempZone").innerText) {
      return alert("로그인후 이용바랍니다");
    }
    socket.emit(
      "message",
      { text: chat.value },
      { who: document.getElementById("tempZone").innerText }
    );
  };
}
socket();

let createChat = function (data, who) {
  const chatting = document.createElement("div");
  chatting.innerText = `${who}: ${data}`;
  chatZone.appendChild(chatting);
};

document.getElementById("board").style.display = "none";
document.getElementById("loginBoard").style.display = "flex";
