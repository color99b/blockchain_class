const router = require("express").Router();
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
const jwtSecret = "jwtKey";
const userList = {};
router.post("/regist", (req, res) => {
  // const tempJWT = jwt.sign({ name: "test" }, "sample", {
  //   algorithm: "HS256",
  //   expiresIn: "10m",
  //   issuer: "kyj",
  // });
  // console.log(tempJWT);

  const userToken = jwt.sign(userList, jwtSecret, {
    expiresIn: 5,
    issuer: req.body.id,
  });
  console.log(userToken);
  const newUserToken = jwt.verify(userToken, jwtSecret);
  // const tempData = jwt.verify(tempJWT, "sample");
  // console.log(tempData);
  console.log(newUserToken);

  res.cookie(req.body.id, req.body.pw, {
    expires: new Date(Date.now() + 5000),
  });
  //응답으로 쿠키 추가
  if (!userList[req.body.id]) {
    userList[req.body.id] = {
      pw: crypto.SHA256(req.body.pw).toString(),
      name: req.body.name,
    };

    // pw: req.body.pw.crypto.SHA256(req.body.pw).toString(),

    res.status(200).json({ msg: "regist", token: userToken });
  } else {
    res.send({ status: 402, data: "exist id" });
  }
  console.log(req.body);
});

router.post("/login", (req, res) => {
  // console.log(req.cookies.cookie_name);
  //요청을 통해 받은 쿠키

  if (userList[req.body.id]?.pw === crypto.SHA256(req.body.pw).toString()) {
    res.cookie(
      "log_jwt",
      jwt.sign({ name: userList[req.body.id].name }, "block7testing", {
        algorithm: "HS256",
        expiresIn: "10m",
        issuer: "kyj",
      })
    );
    res.send({
      status: 200,
      data: "login",
      idName: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
    });
  } else {
    res.send({ status: 401, data: "wrong password" });
  }
  console.log(req.body);
});
module.exports = router;
