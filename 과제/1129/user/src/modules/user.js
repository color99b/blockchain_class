const TYPE = {
  LOGIN: "/LOGIN",
  REGIST: "/REGIST",
  LOGOUT: "/LOGOUT",
};

const login = (id, pw) => ({
  type: TYPE.LOGIN,
  payload: { id, pw },
});

const logout = {
  type: TYPE.LOGOUT,
};

const regist = (id, pw, name) => ({
  type: TYPE.REGIST,
  payload: { id, pw, name },
});

export const action = { login, logout, regist };

export let userName = "";

export const userList = [];
// export const initialize = { id: "qwer", pw: 1234, name: "하하호호" };
export const reducer = (state = 0, action) => {
  const { type, payload } = action;
  let temp = false;
  let tempi;
  switch (type) {
    case TYPE.LOGIN:
      for (let i = 0; i < userList.length; i++) {
        temp =
          userList[i].id == payload.id
            ? userList[i].pw == payload.pw
              ? true
              : false
            : false;
        tempi = i;
        if (temp) break;
      }

      // return temp
      //   ? `${userList[tempi].name}님 환영합니다.`
      //   : `회원정보가 일치하지않습니다.`;

      return temp
        ? (userName = userList[tempi].name)
        : `회원정보가 일치하지않습니다.`;

    case TYPE.LOGOUT:
      return "로그아웃이 완료 되었습니다.";

    case TYPE.REGIST:
      userList.push(payload);
      return console.log(userList);
    // return `${payload.id}님 회원가입이 완료되었습니다.`;

    default:
      return state;
  }
};
