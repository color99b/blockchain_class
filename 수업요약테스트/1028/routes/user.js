const { User } = require("../models/index.js");

const cryptoJs = require("crypto-js");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
router.post("/regist", async (req, res) => {
  try {
    const tempUser = await User.findOne({ where: { userId: req.body.id } });

    if (tempUser) {
      res.status(500);
      res.send({ message: "exist ID" });
      return;
    }
    const { id, pw, name, className } = req.body;
    await User.create({
      userId: id,
      userPw: cryptoJs.SHA256(pw).toString(),
      name,
      class: className,
    });

    res.end();
  } catch (error) {
    res.status(501);
    res.send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const tempUser = await User.findOne({ where: { userId: req.body.id } });
    if (!tempUser) {
      res.status(500);
      res.send({ message: "no ID" });
      return;
    }

    if (tempUser.userPw == cryptoJs.SHA256(req.body.pw).toString()) {
      res.cookie(
        "sid",
        jwt.sign(
          {
            id: tempUser.id,
            name: tempUser.name,
          },
          process.env.JWT_KEY,
          {
            algorithm: "HS256",
            expiresIn: "30m",
            issuer: "kyj",
          }
        )
      );
      res.send({ name: tempUser.name });
      return;
    }
    res.status(500);
    res.send({ message: "worng password" });
  } catch (error) {
    res.status(501);
    res.send(error);
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("sid");
  res.end();
});

module.exports = router;
