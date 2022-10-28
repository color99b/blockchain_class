const router = require("express").Router();
const user = require("./user.js");
const board = require("./board.js");
const jwt = require("jsonwebtoken");

router.use("/user", user);
router.use("/board", board);

module.exports = router;
//router 를 exports 해줘야 양방향 통신인지 알 수 있음
