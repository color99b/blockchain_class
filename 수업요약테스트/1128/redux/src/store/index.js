import { legacy_createStore as createStore } from "redux";
// 도태되어가는 코드. store를 만드는 것.
// 대신하는 함수가 @reduxjs/toolkit 라이브러리의 configureStore 이다.
//react 에서 redux를 사용하기 위한 root 컴포넌트를 가져온다.
import { composeWithDevTools } from "redux-devtools-extension";
// 브라우저의 redux devtool과 연결해준다. 함수이다.
import reducer from "../reducer/index.js";
export const store = createStore(
  // store 를 생성한다.
  reducer, // 첫 번째 매개변수로 reducer를 전달한다.
  { test: "testing" }, // 두번째 매개변수로 초기상태 전달
  composeWithDevTools() // 세번째 매개변수로 옵션으로 devtool 연결.
);
