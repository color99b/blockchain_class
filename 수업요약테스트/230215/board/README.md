# React + Node.Js(express) Server all in one

1. react 설치

```sh
yarn create react-app 폴더명
```

2. 라이브러리 설치

```sh
yarn add express dotenv express-session cookie-parser morgan styled-components react-router-dom mysql2 sequelize sequelize-cli axios cors
yarn add -D npm-run-all nodemon
```

- express : Node.js 의 HTTP 서버 구현
- dotenv : .env 폴더 자동 파싱, process 객체에 env 프로퍼티에 추가
- express-session : express 서버용 session 라이브러리
- cookie-parser : Front 에서 보내온 쿠키 자동 파싱
- morgan : 테스트 로그 작성용
- mysql2 : sequelize 와 함께 사용하는 mySQL 라이브러리
- sequelize : DB 파싱용 라이브러리
- sequelize-cli : sequelize 명령어 라이브러리
- React
  - react-router-dom : React 에서 Router 사용하기 위한 라이브러리
  - axios : back end와 api 통신을 하기위한 front 라이브러리
- Dev
  - nodemon : node.js 실행 시 파일 실행시 파일 수정에 대해
  - npm-run-all : 여러 서버를 한 번에 실행하기 위한 라이브러리
- cors : Cross Origin Resource

3. server 폴더 생성

- .env 파일 생성후 아래 내용 입력

```sh
BUILD_PATH = "./server/build"
```

4. Sequelize 기본 설정 설치

```sh
cd server
npx sequelize init
```

5. package.json 수정

아래처럼 세팅을 마치면 yarn start 로 두 서버를 한 cmd 창으로 열 수 있다.

```sh
  "scripts": {
    "start": "npm-run-all --parallel start:**",
    "start:sever": "nodemon ./server",
    "start:client": "react-scripts start",
    "build": "react-scripts build",
```

6. mysql db 생성후
   models 폴더에 table명 .js 파일 생성후 sequelize , 및 module.exports 연동

- (model)index에서 models의 나머지 table 명 {asd, board} 등등으로 구조분해 할당으로 가져오기
  -ex : Board.init(sequelize);
  -ex :

  ```sh
  const Board = require("./board");
  const db = { Board };
  ```

- (server)index에서 db require models로 model을 가져와 db.sequelize.sync 연동

7. src 폴더 밑에 container, component 폴더 생성 후 jsx 파일 만들기
