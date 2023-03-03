// npm i express cors truffle web3
// npm i -D prettier-plugin-solidity
// npx truffle init

const express = require("express");
const cors = require("cors");
const Web3 = require("web3");
const CounterContract = require("./build/contracts/Counter.json");

const app = express();
const web3 = new Web3("http://127.0.0.1:8545");

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

app.post("/api/getDeployed", async (req, res) => {
  const networkId = await web3.eth.net.getId();
  const CA = CounterContract.networks[networkId].address;
  const abi = CounterContract.abi;
  const deployed = new web3.eth.Contract(abi, CA);
  res.send({ deployed: deployed, CA: CA });
});

app.post("/api/increment", async (req, res) => {
  const from = req.body.from;

  const nonce = await web3.eth.getTransactionCount(from);
  // none : 트랜잭션 개수 << 매개변수로 전달된 지갑 주소의 transaction 개수를 다음 트랜잭션에서 확인한다.
  // 생성된 트랜잭션들은 순서가 있다.
  // - metamask 에서 다른 계정에 ether를 보내고 채굴을 했는데 정상 작동 하지 않는 경우는
  // 그 지갑 주소의 transaction이 순서대로 되지 않았을 때 발생한다.
  //    - ex : 메타마스크에서 3개의 트랜잭션을 기억하고있는 상황에서
  //            nonce가 3으로 전달되었고, ganache는 새로 시작한다면 그 지갑 주소의 transaction이 없을 때 nonce가 0이어야하는데 metamask 기준 3으로 전달되어 정상적이지 않다고 판단해 블록에 추가되지 않는다.
  const networkId = await web3.eth.net.getId();
  let CA = CounterContract.networks[networkId].address;
  const abi = CounterContract.abi;

  const deployed = new web3.eth.Contract(abi, CA);
  const data = await deployed.methods.increment().encodeABI();
  // 트랜잭션을 바로 보내는(send) 것이 아닌 bytecode 형식으로 변환하여 data에 포함시킨다.

  const txObj = {
    nonce,
    from,
    to: CA,
    data,
  };
  res.json(txObj);
});

app.listen(8080, () => {
  console.log("server 시작");
});
