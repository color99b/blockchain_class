const router = require("express").Router();

const { Board } = require("../models");

router.post("/new", async (req, res) => {
  console.log(req.body);
  try {
    await Board.create(req.body);
    res.send({ isError: false });
  } catch (error) {
    res.send({ isError: true });
  }
});

module.exports = router;
