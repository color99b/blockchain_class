const router = require("express").Router();
// const board = require("./board.js");
const user = require("./user.js");
const board = require("./board.js");

router.use("/", (req, res, next) => {
  console.log("routes/index.js :" + req.url);
  next();
});

// router.use("/board", board);
router.use("/user", user);
router.use("/board", board);

module.exports = router;

//import / export
//require / module.exports
