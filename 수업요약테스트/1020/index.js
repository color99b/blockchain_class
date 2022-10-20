import express from "express";
import session from "express-session";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import { fileURLToPath } from "url";
//url : 주소? 라우터? 서버내에서의 파일 위치 등등, 내장 모듈

import listApi from "./route/index.js";

const todoList = [];
dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.set("port", process.env.PORT || 8080);
app.use(express.json());
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session",
  })
);

app.use("/api/list", listApi);

// app.get("/api/list", (req, res) => {
//   res.send({
//     list: todoList,
//   });
// });
//키 값의 모든 것이 스트링으로 들어가면 제이슨 형태 / 아니면 객체

// app.get("/api/add", (req, res) => {
//   console.log(req.query);
//   todoList.push(req.query.name);
//   //req, 즉 요청에 body 안에 있는 do-name을 todoList 에 추가한다.
//   const { str } = req.query;
//   console.log(str);
//   console.log(todoList);
//   res.end();
// });
//주소에 http://localhost:8080/api/add?name=asdawd&str=라랄라 하면
// &는 키 하나를 끊어주고 name을 한 번 더 적어주면 name은 json 속 배열로 들어간다.

//get 과 post 의 차이 = > query냐 body 냐

// app.post("/api/add", (req, res) => {
//   //post 형식으로 요청을 받을때 (첫 번째 매개변수, 두 번째 매개변수)
//   //첫 번째 매개변수는 라우터, 즉 주소의 뒤에 어떻게 붙어서 요청이 들어왔는가?
//   // localhost:8080/api/add << 라고 들어왔을때
//   // 두 번째 매개변수는 콜백 함수이며, 해당 post 요청에 대해서 처리하는 작업 코드
//   // console.log(req.body);
//   todoList.push(req.body.name + " &lt현재 시간&gt: " + req.body.time);
//   //req, 즉 요청에 body 안에 있는 do-name을 todoList 에 추가한다.
//   // const { str } = req.body;

//   // console.log(str);
//   console.log(todoList);
//   res.end();
//   //res, 즉 응답으로 todoList 를 보내고 완료한다.
// });

app.listen(app.get("port"), () => {
  console.log("서버오픈");
});
