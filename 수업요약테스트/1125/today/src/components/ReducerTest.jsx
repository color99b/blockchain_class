// useReducer << reducer를 사용하는 Hook
// reducer 가 무엇인가? 변수를 정의함에 있어서의 선행작업 정도되는 함수
// state 상태값 / reducer 요청을 실행하는 함수 / action: 요청 / dispatch: 요청을 받는 함수

// 동사무소가서 주민등록등본 발급-> 번호표뽑고 기다리고 순서되면 서류접수
// 민증 지문 돈을 준다
// 접수원이 모든 것을 받아서 확인 후에 정보를 찾아서 출력해서 우리에게 전달
// 서류제출 + 발급해주세요 -> action
// 접수원이 서류제출 발급요청을 받음 -> action을 받는 dispatch
// 접수원이 서류제출 발급하는일을 함 -> reducer

import { useReducer, createContext } from "react";

export const OfficeContext = createContext();

const reducer = (state, action) => {
  //reducer : 작업해서 state에 저장하는 녀석
  console.log(state);
  console.log(action);
  console.log(action.payload.cash);

  switch (action.type) {
    case "주민등록등본":
      if (action.payload.cash < 500) return "돈이 부족합니다";
      return "주민등록등본이 발급되었습니다.";

    case "주민등록초본":
      if (action.payload.cash < 400) return "돈이 부족합니다";
      return "주민등록초본이 발급되었습니다.";

    case "건축물대장":
      if (action.payload.cash < 1000) return "돈이 부족합니다";
      return "건축물대장이 발급되었습니다.";

    case "지방세납세증명":
      if (action.payload.cash < 600) return "돈이 부족합니다";
      return "주민등록등본이 발급되었습니다.";

    case "운전면허 정보":
      if (action.payload.cash < 300) return "돈이 부족합니다";
      return "운전면허 정보이 발급되었습니다.";

    case "전입신고":
      if (action.payload.cash < 1500) return "돈이 부족합니다";
      return "전입신고이 발급되었습니다.";

    case "코로나19 격리통지서":
      if (action.payload.cash < 3000) return "돈이 부족합니다";
      return "코로나19 격리통지서 발급되었습니다.";

    case "병적증명서":
      if (action.payload.cash < 0) return "돈이 부족합니다";
      return "병적증명서 발급되었습니다.";

    default:
      return "요청이 없어용";
  }

  return `${state} / 남은금액 : ${action.payload.cash}`;
};

export default function ReducerTest({ children }) {
  // children은 컴포넌트의 자식 컴포넌트(엘리먼트)이다.
  // 컴포넌트 안에 컴포넌트를 넣을때는 children 객체로 props를 받아와야함.
  const [result, requestDispatch] = useReducer(reducer, "요청이 없습니다.");

  // console.log(children);
  //const [state, dispatch] = useReducer(reducer, default or initialState);
  return (
    <OfficeContext.Provider value={{ result, requestDispatch }}>
      {children}
    </OfficeContext.Provider>
  );
}
