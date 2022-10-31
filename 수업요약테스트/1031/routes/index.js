const router = require("express").Router();
// router.use("/", (req, res, next) => {
//   console.log(req.body, req.query);
//   // res.end(); == res.send() == res.json()
//   // 위 3개는 다 같이 return과 같은 역할을 한다.

//   // next();  -> 다음으로 넘긴다. 다음이 없으면 무한 정지가 될 수 도 있다.
//   // res.end() 등등이 없을 때 응답을 보내지 않음으로 next가 없으면 응답하지 않는 상태로 멈춘다.
//   //next()가 있으면 다음 라우터(코드)로 넘어간다.
// });
const table1 = require("./table1.js");
const table2 = require("./table2.js");

router.use("/table1", table1);
router.use("/table2", table2);

//미들웨어

module.exports = router;
