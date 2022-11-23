import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./commponents/Home";
import LogIn from "../../router3/src/components/Login";
import In from "../components/Log/in";
import Out from "../components/Log/Out";
import Header from "../components/Header";

const router = createBrowserRouter([
  {
    //이 안에서 라우터에 대한 설정을 모두 구현한다.
    path: "",

    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "log",
        element: <Log />,
        children: [
          {
            path: "In",
            element: <In />,
          },
          {
            path: "out",
            element: <Out />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
