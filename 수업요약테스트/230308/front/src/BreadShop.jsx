import { useEffect, useState } from "react";

import BreadShopContract from "./contracts/BreadShop.json";

export const BreadShop = ({ web3, account }) => {
  const [bread, setBread] = useState(0);
  const [deployed, setDeployed] = useState();
  const [CA, setCA] = useState();
  const constructor = async () => {
    if (!web3) return;

    const networkId = await web3.eth.net.getId();
    const _CA = BreadShopContract.networks[networkId].address;
    setCA(_CA);
    const abi = BreadShopContract.abi;

    const _deployed = new web3.eth.Contract(abi, _CA);
    setDeployed(_deployed);
    const _bread = await _deployed.methods.getBread().call({ from: account });
    setBread(_bread);
    const temp = await _deployed.methods.getSender().call({ from: account });
    console.log(temp);
  };

  const buy = async () => {
    await deployed.methods
      .buyBread()
      .send({ from: account, to: CA, value: web3.utils.toWei("1") });

    const _bread = await deployed.methods.getBread().call({ from: account });
    setBread(_bread);
  };
  const sell = async () => {
    await deployed.methods.sellBread().send({ from: account, to: CA });
  };

  useEffect(() => {
    constructor();
  }, []);

  return (
    <div>
      <div>현재 빵 개수 : {bread}</div>
      <div>
        <button onClick={buy}>buy</button>
      </div>
      <div>
        <button onClick={sell}>sell</button>
      </div>
    </div>
  );
};
