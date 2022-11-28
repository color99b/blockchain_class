export default (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "plus":
      return { test: state.test + "1" };
    // case "mius" :
    // return {test: state.test + "1"};
    case "dPlus":
      return { test: state.test + "2" };
    // case "dMius" :
    // return {test: state.test + "1"};
    default:
      return state;
    //reducer 엔  switch 문 default 필수
  }
};

// export default reducer;
