//로그인한 유저의 정보
const TYPE = {
  ADD: "board/add",
};

const add = (userName, title, text, time) => ({
  type: TYPE.ADD,
  payload: { userName, title, text, time },
});

export const action = { add };

export const initialize = [];
// 로그인 했을 때 아이디아 이름을 저장하겠다.
export const boardAdded = [];

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case TYPE.ADD:
      return [...state, payload];

    default:
      return state;
  }
};
