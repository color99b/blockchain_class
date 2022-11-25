import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//StrictMode가 무엇이냐?
// -안전하지않은 생명 주기 메서드들을 체크해서 알려준다.(componentDidMount 등)

// -ref에 대한 경고를 해준다.
// - 메모리 누수 등의 부작용 검사를해준다.
// regary Context Api 에 대한 검사를 해준다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
