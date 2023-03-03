import { useState, useEffect } from "react";
import axios from "axios";
const Counter = ({ web3, account }) => {
  const [count, setCount] = useState(0);
  const [deployed, setDeployed] = useState();
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    (async () => {
      if (deployed) return;

      const getDeployed = await axios.post(
        "http://localhost:8080/api/getDeployed"
      );
      const CA = getDeployed.CA;
      setDeployed(getDeployed.deployed);

      web3.eth.subscribe("logs", { address: CA }).on("data", (log) => {
        // subscribe method를 사용해서 블록체인 네트워크에 구독, 이벤트명은 logs이다.
        // Solidity에서 event 이벤트명(로그를 남길 data/변수) 를 선언하고 로그를 남길 순간에 emit으로 구독한 서버에 알린다.
        // emit으로 전달된 데이터는 log.data 에 들어있다.
        // subscribe의 두 번째 매개변수에 옵션을 추가할 수 있으며, 옵션은 해당 주소에 대해서만 logs를 받는다.
        console.log(log);

        const params = [{ type: "uint256", name: "temp" }];
        // Solidity 에서 log로 받아오는 데이터에 대한 키 값 설정.
        // 이때 front에서 정하는 name은 변경가능
        const value = web3.eth.abi.decodeLog(params, log.data);
        console.log(value);
        setCount(value.temp);
      });
    })();
  }, []);

  const increment = async () => {
    // const result = await deployed.methods.increment().send({ from: account });
    // if (!result) return;
    // const _count = await deployed.methods.getResult().call();
    // setCount(parseInt(data));

    const data = (
      await axios.post("http://localhost:8080/api/increment", {
        from: account,
      })
    ).data;

    await web3.eth.sendTransaction(data);
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
