1. - 설치

```bash
npm i truffle
```

2. - 기본 설정

```bash
npx truffle init
```

- npx sequeliz init와 같이 폴더/파일이 자동으로 생성 -폴더와 파일 설명
  - contracts : smart contract 코드 작성 폴더
  - migrations : 배포 관련 코드 작성 폴더 (javascript)
  - test : 테스트 코드 작성 폴더 (jest)
  - truffle-config.js : 설정파일 (보통 custom 할 수 있는 건 주석처리 되어있는 게 많음.)

3. contracts 폴더에 .sol 파일 작성
   ex code :

```js
// SPDX-License-Identifier: MIT
// 라이선스 표기 << 어떤 라이선스 사용하는가? 필요함
pragma solidity ^0.8.18;

// 솔리디티 버전 설정, 크립토좀비 0.5.15

contract Counter {
  int256 private result;

  constructor() {
    result = 0;
  }

  function getResult() public view returns (int256) {
    return result;
  }

  function add(int _num, int _num2) public {
    result = _num + _num2;
  }

  function minus(int _num, int _num2) public {
    result = (_num >= _num2) ? _num - _num2 : _num2 - _num;
  }

  function increment() public {
    result++;
  }

  function decrement() public {
    result--;
  }
}
```

4. 작성된 sol 파일을 compile 해준다.

- 컴파일

  ```bash
  npx truffle compile
  ```

  - 생성된 폴더
    - build/contracts : compile로 생성된 데이터를 json 형식으로 추출.
  - 옵션 없을 시에 수정된 sol 파일만 인식하여 컴파일을 진행
  - all 옵션일시 무조건 전부 진행 // npx truffle compile --all

- 배포 : 작성된 코드를 기반으로 transaction을 자동으로 생성하고, localhost 와 같이 데이터를 요청하면 그 정보를 띄워주는 역할을 한다.

=> 완료가되면 root 폴더내에 build 폴더가 생긴다.

5. compile된 sol파일에 대한 migration을 migrations 폴더에 생성한다.
   migrations 폴더에서

- 파일명은 번호\_내용\_컨트랙트명 의 형식을 지켜야한다.

  - 1_deploy_test.js

    ```js
    const test = artifacts.require("Test");
    // 컴파일 후 생성된 json 파일명을 전달하여 스마트 컨트랙트 데이터를 가져온다.

    module.exports = function (deployer) {
      // deployer : truffle 이 제공하는 배포를 위한 객체
      deployer.deploy(test);
    };
    ```

6. bash에서 migration 을 해준다.

```bash
 npx truffle migration
 # 명령어 실행전에 truffle-config.js 파일 내에서 development (66번째 줄부터) 관련 설정을 주석 해제하자.
 # --reset 옵션을 달면 처음부터 다시 배포한다는 뜻.
```

======================================================

1. react 폴더 만들기

```bash
yarn create react-app front
```

2. web3 설치

```bash
yarn create 한 폴더에서
yarn add web3
```

3. custom hook 만들기
   src 폴더 밑에 useWeb3.js 라고 파일을 하나 만든다.

```js
import { useState, useEffect } from "react";
import Web3 from "web3";
const useWeb3 = () => {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState();

  useEffect(() => {
    (async () => {
      if (!window.ethereum) return;
      //메타 마스크가 설치되어있지 않으면 끝낸다.

      const [address] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(address);

      const _web3 = new Web3(window.ethereum);
      setWeb3(_web3);
      //메타마스크와 연결
    })();
    //(함수)() : 즉시 실행함수, 함수를 바로 실행한다.
  }, []);

  return [web3, account];
};

export default useWeb3;
// html을 보내는 게 아니기에 component가 아니다.
// 커스텀 hook 이다.
```

4. app.js 메인에서 위에서 만든 훅을 가져와 metaMask와 연동 및 틀을 제작한다.

```js
import useWeb3 from "./useWeb3";

function App() {
  //Test CA : 0xFe92bC76C7aFe42B78312E42100D04dF4C876e20
  //Counter CA : 0x4c23E1ea48c808fCC2e8EC0E4332f9d54054eE51

  const [web3, account] = useWeb3();
  if (!account) return <h1>메타마스크 설치 및 계정 연결해줘</h1>;
  return (
    <div className="App">
      <h1>Account : {account}</h1>
    </div>
  );
}

export default App;
```

5. sol 에 만들어둔 함수를 테스트할 html 파일을 만든다.

- 이때 abi, bin 등이 담긴 json이 build에 있는데 react에서 다른 폴더의 파일을 가져오는건 추가 작업이 필요하기에 src밑에 contracts 폴더를 만들고, 쓸 json을 복사해서 옮겨온다.

```jsx
import { useState, useEffect } from "react";
import CounterContract from "./contracts/Counter.json";

const Counter = ({ web3 }) => {
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

export default Counter;
```
