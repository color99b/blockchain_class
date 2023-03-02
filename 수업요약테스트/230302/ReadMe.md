# Truffle

- 블록체인 smart contract framework

- compile, 배포, 관리, 테스트 등을 제공

- 많이 사용되는 프레임 워크

# Solidity prettier 설정

```bash
npm i -D prettier-plugin-solidity
```

# Truffle 사용 방법

- 설치

```bash
npm i truffle
```

- 기본 설정

  ```bash
  npx truffle init
  ```

  - npx sequeliz init와 같이 폴더/파일이 자동으로 생성 -폴더와 파일 설명
    - contracts : smart contract 코드 작성 폴더
    - migrations : 배포 관련 코드 작성 폴더 (javascript)
    - test : 테스트 코드 작성 폴더 (jest)
    - truffle-config.js : 설정파일 (보통 custom 할 수 있는 건 주석처리 되어있는 게 많음.)

- 컴파일

  ```bash
  npx truffle compile
  ```

  - 생성된 폴더
    - build/contracts : compile로 생성된 데이터를 json 형식으로 추출.
  - 옵션 없을 시에 수정된 sol 파일만 인식하여 컴파일을 진행
  - all 옵션일시 무조건 전부 진행 // npx truffle compile --all

- 배포 : 작성된 코드를 기반으로 transaction을 자동으로 생성하고, localhost 와 같이 데이터를 요청하면 그 정보를 띄워주는 역할을 한다.

```bash
 npx truffle migration
 # 명령어 실행전에 truffle-config.js 파일 내에서 development (66번째 줄부터) 관련 설정을 주석 해제하자.
```

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

- 배포결과에서 contract address 를 가져온다.

  - 0x0757293b6C79fc4b848512d7f90d3fAF8146217d

- truffle을 사용해서 확인

```bash
 npx truffle console
 Test.deployed().then(instance => test = instance)
 Counter.deployed().then(instance => counter = instance)

 test.getText.call() // Hi block 7
 test.setText("넣고싶은 문장")
 test.getText.call() //넣었던 문장
```

- Jest 테스트

  - test 폴더 내에 코드 작성.
  - 명령어를 입력
  - test 폴더 내에서 실행
    npx truffle test //test : 고정 명령어 (폴더명인데 바뀌면 안됨)

# React 로 front 작성

1. React 프로젝트 생성

```bash
yarn create react-app front
```

2. web3 설치

```bash
yarn create 한 폴더에서
yarn add web3
```

3. 카운터 스마트 컨트랙트 생성

## contract : 서면으로 이루어지던 계약을 코드로 구현하고 특정 조건이 충족되었을 때 해당 계약이 이행되도록 하는 script

## transaction : 저장 공간

- > bitcoin 에서는 거래 명세서 그 이상도 그 이하도 아니지만, ethereum 에서는 smart contract를 사용
- > transaction 안에 smart contract 가 담김.
