//package.json 내의 "type": module은 import 등 es6문법을 사용학 ㅣ위해서

import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import routes from "./routes/index.js";

dotenv.config();

const app = express();
app.set("port", process.env.PORT || 8080);

// app.use(cors()); //cors해결 단 현재로는 단점이 있다. : 모든 주소에 대해서 응답해준다.
app.use(cors({ origin: "http://localhost:3000" }));
//origin은 원본의 주소이며 해당 원본 주소에 대해서만 요청을 응답하겠다.
// - 원본 주소에는 http와 같은 프로토콜, localhost와 같은 domain주소, :3000과 같은 포트까지 포함한다.
// /api와 같은 라우터는 포함하지 않는다.
app.use((req, res, next) => {
  if (process.env.NODE.ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

app.use(express.json());
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
    name: "seed",
  })
);

app.use("/api", routes);

app.listen(app.get("port"), () => {
  console.log("Express Server Open");
});

//CORS policy(정책)
// Cross Origin Resoucre Sharing
// 교차 원본 자원 공유
// 같은 주소가 아닌 다른 주소에서 aPi 요청/ 이미지 요청 등
// 자료를 구해올수 없다. << 보안상의 문제.
// get에서는 발생하는 경우가 거의 없지만 post 등에서는 거의 대부분 발생한다.
//해결방법 proxy라는 개념을 사용한다.
//proxy : 간단히 말하면 중간 서버. 중간에서 다른 서버에 자료를 요청해서
//    자기 것인것 마냥 응답으로 보낸다.

//다른 해결방법 : header에서 설정을 추가하여 웹페이지의 주소에 대해서 인증을 해준다.
// 제일 쉬운 방법 : node.js 에 cors라는 라이브러리가 있다.
