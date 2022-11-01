const router = require("express").Router();
const crypto = require("crypto-js");
const userList = {};
router.post("/regist", (req, res) => {
  if (!userList[req.body.id]) {
    userList[req.body.id] = {
      pw: crypto.SHA256(req.body.pw).toString(),
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      id: req.body.id,
    };
  }
  console.log(req.body);
});

router.post("/login", (req, res) => {
  if (userList[req.body.id]?.pw === crypto.SHA256(req.body.pw).toString()) {
    res.send({
      status: 200,
      data: "login",
      id: userList[req.body.id].id,
      name: userList[req.body.id].name,
      age: userList[req.body.id].age,
      gender: userList[req.body.id].gender,
    });
  } else {
    res.send({ status: 401, data: "wrong password" });
  }
  console.log(req.body);
});

module.exports = router;
