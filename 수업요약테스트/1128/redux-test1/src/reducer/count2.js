const reducer = (state = 0, action) => {
  console.log(state, action);
  //state의 대체값을 0으로 정의
  // state의 대체값을 주지않으면 오류가 발생한다.

  const { type, payload } = action;
  switch (type) {
    case "count2/plus":
      return state + 1;
    // ...state << 기존에 state를 넣는다.
    // count1 : state.count1 + payload.input << count1 프로퍼티에
    //              payload로 받은 input 프로퍼티를 더한다.
    case "count2/minus":
      return state - 1;

    default:
      return state;
  }
};

export default reducer;
