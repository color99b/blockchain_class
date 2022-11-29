const reducer = (state = [], action) => {
  console.log(state, action);

  const { type, payload } = action;
  switch (type) {
    case "tempArr/insert":
      return [...state, payload.input];
    // ...state << 기존에 state를 넣는다.
    // count1 : state.count1 + payload.input << count1 프로퍼티에
    //              payload로 받은 input 프로퍼티를 더한다.
    case "tempArr/delete":
      const temp = [...state];
      temp.pop();
      return temp;
    //"count1/minus" 형식처럼 /로 나누면
    // 앞의 count1이 store 내의 state 자체를 의미하게 된다.
    // reducer가 가져오는 state는 store 내의 count1이 된다.

    case "tempArr/edit":
      const temp1 = [...state];
      const len = temp1.length;
      temp1[len - 1] = payload.input;
      return temp1;
    default:
      return state;
  }
};

export default reducer;
