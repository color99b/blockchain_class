import logo from "./logo.svg";
import "./App.css";
import Web3 from "web3";
import { useEffect, useState } from "react";
import YJTokenContract from "./YJToken.json";
function App() {
  useEffect(() => {
    (async () => {
      const _web3 = new Web3(window.ethereum);
      const [_account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const contract = new _web3.eth.Contract(YJTokenContract.abi);
      const txObj = {
        data: YJTokenContract.bytecode,
        arguments: ["YJToken", "YJ", 123],
      };
      const deployed = await contract.deploy(txObj).send({
        from: _account,
        gas: 2000000,
      });

      // const networkId = await _web3.eth.net.getId();
      // const { abi, bytecode } = YJTokenContract;
      // const deployer = new _web3.eth.Contract(abi);
      // const deployed = deployer
      //   .deploy({ data: bytecode })
      //   .send({ from: _account, gas: 100000 });
      console.log(deployed.options.address);
    })();
  }, []);
  return <div className="App"></div>;
}

export default App;
