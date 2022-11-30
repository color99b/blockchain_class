//회원가입한 유저들의 정보
//로그인한 유저의 정보
const TYPE = {
  REGIST: "user/regist",
};

const regist = (userId, userPw, userName) => {
  //8. regist를 호출당했다.
  console.log("action regist");
  //9. 새로운 state를 반환했다.
  return {
    type: TYPE.REGIST,
    payload: { userId, userPw, userName },
  };
};

export const action = { regist };

export const initialize = [];

export const reducer = (state = initialize, action) => {
  //12. dispatch가 액션을 매개변수로 보내며 호출했다. state는 기존의 상태값이다.
  // -state는 combinReducers 의 사용여부에 따라서 달라진다.
  console.log(action);
  const { type, payload } = action;
  console.log(payload);

  //13. type에 따라서 state를 재정의한다. 재정의하고 싶은 정보를
  // return한다.
  switch (type) {
    case TYPE.REGIST:
      if (state.find((item) => item.userId === payload.userId)) return state;
      else return [...state, payload];

    default:
      return state;
  }
};
