// npm => node package manager -> node.js 에서 사용하는 라이브러리 관리자
// yarn(React)도 사용 가능

//npmn install 라이브러리명 / npm i 라이브러리명
// 라이브러리 설치

//package.json : node.js 를 사용해 구현된 프로그램(모듈, 라이브러리, ...)
//                에 대한 정보를 모아둔 파일

// dependencies 는 의존성을 뜻하며 현재 프로그램이 실행되기 위해 필요한 라이브러리이다.
//
const express = require("express");
//require 는 외부 라이브러리를 가져오는 함수이다.
// 매개변수로 라이브러리명을 전달한다.

const app = express();

app.get("/", (req, res) => {
  res.send("hi");
  // req : 요청 사항, 요청에 대한데이터
  // res : 응답 사항, 응답의 데이터
  //send 는 return 같은 역할
});

app.listen(8080, () => {
  console.log("서버 열음");
});
