const router = require("express").Router();
const { Table1, Table2 } = require("../models/index.js");
//router를 전부 관리하는 root이다.
//router에 대한 root 파일이라고 얘기할 수있다.

//CRUD ( Create Read Update Delete) > sequlize, sql
//create : create, insert
//Read : findAll /, findeOnem, Select
//Update => update / upadate
//Delete => destroy / delete

//아래 5가지 방식으로 통신을 하는 방식을 REST API 라고 한다.
// RESTFUL API
// HTTP 통신 -> Web 통신을 할 때 기본적으로 사용되는 방식.
// REST API VS GraphGL
//use 는 광역확인 / 따라서 use 가 미들웨어인 느낌 (최상단)
// next 는 그냥 함수마냥다음 흐름으로 가는거임.
router.get("/", async (req, res) => {
  const { body, query } = req;
  const options = {
    include: [
      {
        model: Table2,
        as: "Table2s",
      },
    ],
  };
  if (query.column2) {
    options.where = {
      //어떤 조건으로 찾을것인가.
      column2: query.column2, //colum2가 query.column2인 애를 찾겠다.
    };
  }
  const tempTables = await Table1.findAll(options);
  // Table1.findOne()
  res.send({ name: "get", body, query, tempTables });
});
//내가 요청한 것의 body 와 query를 그대로 보내준다.
// promise 형식의 데이터를 주기위해선 async await 형식으로 해야한다.
// router.get("/", (req, res, next) => {
//   res.cookie("middle", "testing", { expires: Date.now() + 1000 * 1 });
//   next();
// });
//위가 미들웨어인데 정확히 뭔지 모르겠음 next 역할까지

router.post("/", async (req, res) => {
  const { body, query } = req;
  const tempTable = await Table1.create({
    column1: body.column1,
  });
  res.send({ name: "post", body, query, tempTable });
});

router.put("/", async (req, res) => {
  const { body, query } = req;
  const tempTable = await Table1.update(
    {
      column1: body.column1,
      //수정할 정보를 먼저 입력
    },
    {
      where: {
        column2: body.column2,
        //옵션 입력
      },
    }
  );
  res.send({ name: "put", body, query, tempTable });
});
// put vs patch -> 전부 바꾼다 put, 일정한 부분만 바꾼다 patch
router.patch("/", (req, res) => {
  const { body, query } = req;
  res.send({ name: "patch", body, query });
});

router.delete("/", async (req, res) => {
  const { body, query } = req;
  const tempTable = await Table1.destroy({
    where: {
      column1: query.column1,
    },
  });
  res.send({ name: "delete", body, query, tempTable });
});

module.exports = router;
