const Compiler = require("./compiler");
const Client = require("./web3");

const {
  Test: { abi, bytecode },
} = Compiler.compile("Test.sol");

console.log(abi);
const client = new Client("http://localhost:8545");

const txObj = { data: bytecode };
const contract = new client.web3.eth.Contract(abi);

async function init() {
  const instance = await contract.deploy(txObj).send({
    from: "0x5A1888CfaDD4F72FA03DD7416bb5976Fd0f3a178",
    gas: 1000000,
  });
  console.log(instance);
  console.log(instance.options.address); // CA : 0x7D724092916736CC26323356E7ac0ccA7689C52E
}

// init();

async function test() {
  const accounts = await client.web3.eth.getAccounts();
  console.log(accounts);
  const ca = "0x7D724092916736CC26323356E7ac0ccA7689C52E";
  const deployed = new client.web3.eth.Contract(abi, ca);
  let text = await deployed.methods.getText().call();
  console.log(text);

  await deployed.methods.setText("what is lunch").send({ from: accounts[1] });
  text = await deployed.methods.getText().call();
  console.log("text", text);
  const balance = await client.web3.eth.getBalance(accounts[1]);
  console.log(balance);
  //gas총 가격은 gas(쓴 돈 ex :10$) * gas_Pirce (쓴 돈의 화폐 가치 ex: 1$ = 1000원) 이면 gas 는 총 1만원 (10$(gas) * 1000(gasPrice))
}
test();
