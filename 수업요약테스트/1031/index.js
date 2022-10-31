const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");
const db = require("./models/index.js");
const routes = require("./routes/index.js");
dotenv.config();

const app = express();
// 서버 생성
// app : 서버에 대한 정보를 갖고있는 객체
app.set("port", process.env.PORT || 8080);
// 서버 내의 프로퍼티 초기화
// process는 프로그램에 대한 정보를 갖고있다.
// process.env는 환경 변수이다.

app.use((req, res, next) => {
  // use << 미들 웨어 등록
  // 서버에 접근하면 해당 코드가 실행된다.
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  //   morgan을 사용할 때 combined는 배포용으로 사용된다.
  else morgan("dev")(req, res, next);
  //   dev는 개발 모드로 사용된다.
});

app.use("/", express.static(path.join(__dirname, "public")));
// '/' : 서버의 root, 즉 서버에 접근 시에 라우터가 없을 때
// 라우터란? 서버 내의 폴더
//   서버의 하위 페이지를 구현할 때 사용한다.
//   *******/router 식으로 표현한다.
// static은 전역, 기본적으로 연결할 폴더를 설정한다.
//   public 폴더로 연결한다.

app.use(express.json());
// 데이터를 주고 받을 때 json 형식을 사용한다.
// 안넣으면 텍스트(string) 방식으로 된다.

app.use(express.urlencoded({ extended: false }));
// querystring을 파싱할 때 사용한 방법을 설정
// 모듈을 사용하지 않겠다.

app.use(cookieParser(process.env.COOKIE_SECRET));
// 쿠키 파싱(아래에서 암호화가 들어가 있어서)

app.use(
  session({
    // 세션 설정
    resave: false,
    // 요청마다 세션을 재설정 할것인가?
    saveUninitialized: false,
    // 요청에 대해 세션에 작업할 것인가?
    secret: process.env.COOKIE_SECRET,
    // 암호화 << 후에 자세히 할 예정
    cookie: {
      // 쿠키는 어떻게 저장할 것인가?
      httpOnly: true,
      // http에서만 사용한다.

      secure: false,
      // https인가?
    },
    name: "session-cookie",
    // 쿠키에서의 이름
  })
);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/hi", routes);
//localhost:8080/hi  -> routes 에 접근한다.

app.listen(app.get("port"), () => {
  console.log("서버 온");
});
