import { useState, useEffect } from "react";
import ReviewContract from "./contracts/Review.json";

const ReviewTest = ({ web3 }) => {
  const [count, setCount] = useState(0);
  const [deployed, setDeployed] = useState();

  useEffect(() => {
    (async () => {
      if (deployed) return;
      const _deployed = new web3.eth.Contract(
        CounterContract.abi,
        "0x4c23E1ea48c808fCC2e8EC0E4332f9d54054eE51"
      );
    })();
  }, []);

  const increment = () => {};
  const decrement = () => {};

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
        +
      </button>
    </div>
  );
};

export default ReviewTest;
