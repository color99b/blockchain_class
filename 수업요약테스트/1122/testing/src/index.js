import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
//react 의 dom 을 만든다.
root.render(
  //react의 root dom에 매개변수로 전달된 컴포넌트를 생성한다.

  <React.StrictMode>
    {/* //정확하게 출력하기 위해서 생성할 때 한 번 삭제 후에 다시 생성한다. */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
