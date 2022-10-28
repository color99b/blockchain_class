const router = require("express").Router();
const { User, Board } = require("../models/index.js");
const jwt = require("jsonwebtoken");
router.use("/", (req, res, next) => {
  global.userId = "";
  try {
    const tempUserInfo = jwt.verify(req.cookies.sid, process.env.JWT_KEY);
    global.userId = tempUserInfo.id;
    res.cookie(
      "sid",
      jwt.sign(
        {
          id: tempUserInfo.id,
          name: tempUserInfo.name,
        },
        process.env.JWT_KEY,
        {
          algorithm: "HS256",
          expiresIn: "30m",
          issuer: "kyj",
        }
      )
    );
    next();
  } catch (error) {
    res.send(error);
  }
});
router.get("/", async (req, res) => {
  const tempBoard = await Board.findAll({
    //attributes 찾아보기
    order: [["id", "DESC"]], //정렬
    limit: 5, //최대 개수
    // offset: 3, //시작위치
  });
  res.send({ list: tempBoard });
});
router.post("/add", async (req, res) => {
  const tempUser = await User.findOne({
    where: {
      id: global.userId,
    },
  });
  const tempBoard = await Board.create(req.body);
  tempUser.addBoard(tempBoard);
  res.end();
});
router.put("/update", async (req, res) => {
  await Board.update(
    {
      text: req.body.text,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  res.end();
});
router.delete("/delete", async (req, res) => {
  const tempBoard = await Board.findOne({
    where: {
      id: req.query.id,
    },
  });

  if (tempBoard.user_id === global.userId) {
    await Board.destroy({ where: { id: req.query.id } });
  }
  res.end();
});

module.exports = router;
