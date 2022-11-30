//로그인한 유저의 정보
const TYPE = {
  LOGIN: "user/login",
  LOGOUT: "user/logout",
};

const login = (userId, userPw, userDB) => ({
  type: TYPE.LOGIN,
  payload: { userId, userPw, userDB },
});

const logout = () => ({
  type: TYPE.LOGOUT,
});

export const action = { login, logout };

export const initialize = { userId: "", userName: "" };
// 로그인 했을 때 아이디아 이름을 저장하겠다.

export const reducer = (state = initialize, action) => {
  console.log(state);
  const { type, payload } = action;
  switch (type) {
    case TYPE.LOGIN:
      console.log(payload.userDB);
      const tempUser = payload.userDB.find(
        (item) => item.userId === payload.userId
      );
      if (tempUser && tempUser.userPw === payload.userPw)
        return {
          userId: tempUser.userId,
          userName: tempUser.userName,
        };
      else return state;

    case TYPE.LOGOUT:
      return initialize;

    default:
      return state;
  }
};
