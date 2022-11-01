const router = require("express").Router();
const { chatLog } = require("../models/index.js");

router.post("/", async (req, res) => {
  const { body, query } = req;
  console.log(body.text);

  const tempTable = await chatLog.create({
    who: body.who,
    text: body.text,
  });
  res.send({ name: "post", body, query, tempTable });
});

module.exports = router;
