import { useState, useEffect } from "react";
import CounterContract from "./contracts/Counter.json";

const Counter = ({ web3, account }) => {
  const [count, setCount] = useState(0);
  const [deployed, setDeployed] = useState();
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    (async () => {
      if (deployed) return;
      const _deployed = new web3.eth.Contract(
        CounterContract.abi,
        "0x4c23E1ea48c808fCC2e8EC0E4332f9d54054eE51"
      );
      setDeployed(_deployed);
      const _count = await _deployed.methods.getResult().call();
      setCount(parseInt(_count));
    })();
  }, []);

  const increment = async () => {
    const result = await deployed.methods.increment().send({ from: account });
    if (!result) return;
    const _count = await deployed.methods.getResult().call();
    setCount(parseInt(_count));
  };
  const decrement = async () => {
    const result = await deployed.methods.decrement().send({ from: account });
    if (!result) return;
    const _count = await deployed.methods.getResult().call();
    setCount(parseInt(_count));
  };
  const add = async (_num1, _num2) => {
    const result = await deployed.methods
      .add(_num1, _num2)
      .send({ from: account });
    if (!result) return;
    const _count = await deployed.methods.getResult().call();
    setCount(parseInt(_count));
  };

  const minus = async (_num1, _num2) => {
    const result = await deployed.methods
      .minus(_num1, _num2)
      .send({ from: account });
    if (!result) return;
    const _count = await deployed.methods.getResult().call();
    setCount(parseInt(_count));
  };

  return (
    <div>
      <h2>Count : {count}</h2>
      <button
        onClick={() => {
          increment();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          decrement();
        }}
      >
        -
      </button>

      <div>
        num1
        <div>
          <input
            type="text"
            id="num1"
            onInput={(e) => setNum1(e.target.value)}
          />
        </div>
        num2
        <div>
          <input
            type="text"
            id="num2"
            onInput={(e) => setNum2(e.target.value)}
          />
        </div>
      </div>
      <button
        onClick={() => {
          console.log(num1, num2);
          add(num1, num2);
        }}
      >
        add
      </button>

      <button
        onClick={() => {
          console.log(num1, num2);
          minus(num1, num2);
        }}
      >
        minus
      </button>
    </div>
  );
};

export default Counter;
