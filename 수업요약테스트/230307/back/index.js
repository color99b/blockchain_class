const express = require("express");
const cors = require("cors");
const Web3 = require("web3");
const VoteContract = require("./build/contracts/Vote.json");
const app = express();
const web3 = new Web3("http://127.0.0.1:8545");
app.use(cors({ origin: true, credentials: true }));
//origin 에 원래 주소를 넣었지만 true는 모든 주소에 대해서 cors를 무시하게 된다.(*과 같다)
app.use(express.json());

app.post("/api/send", async (req, res) => {
  const networkId = await web3.eth.net.getId();
  const CA = VoteContract.networks[networkId].address;
  const abi = VoteContract.abi;

  const deployed = new web3.eth.Contract(abi, CA);
  const obj = {};
  switch (req.body.method) {
    case "candidates":
      obj.candidateList = await deployed.methods.candidates().call();
      break;
    case "totalVotesFor":
      obj.vote = await deployed.methods.totalVotesFor(req.body.item).call();
      break;
      obj.CA = CA;
    case "voteForCandidate":
      obj.nonce = await web3.eth.getTransactionCount(req.body.from);
      // transaction 의 nonce는 그 사람이 보낸 transaction의 총 회수 (보낸 사람 기준)
      obj.to = CA;
      obj.from = req.body.from;

      obj.data = await deployed.methods
        .voteForCandidate(req.body.candidate)
        .encodeABI();

      break;
    default:
      break;
  }
  res.json(obj);
});
app.listen(8080, () => {
  console.log("8080 server open");
});
