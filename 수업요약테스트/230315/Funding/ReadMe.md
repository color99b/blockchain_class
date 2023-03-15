# 세팅

```bash
Root : 날짜폴더
npm init -y
npm i truffle @openzeppelin/contracts
npm i -D prettier-plugin-solidity
npx truffle init

```

# Funding Contract

- funding : 소규모 후원이나 다수의 개인으로부터 자금을 모집하는 행위
- 컨트랙트 기능

  - 후원 기간이 종료되면
    - 후원 금액이 원하는 이상 모였다면 주최자에게 후원금 전송
    - 후원 금액이 미달됐다면 기존 후원자들에게 원금 돌려주기

- 구현

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Fundraising {
  uint public targetAmount;
  // 목표금액
  address public owner;
  // 펀딩 주최자, 후원을 받는 사람(계정)
  mapping(address => uint) public donations;
  // 후원하는 사람의 계좌, 양
  uint raisedAmount;
  // 후원된 금액
  uint public finishTime;

  // 마감 기한

  constructor(uint _targetAmount) {
    targetAmount = _targetAmount;
    owner = msg.sender;
    raisedAmount = 0;
    finishTime = block.timestamp + 2 weeks;
    // 컨트랙트가 저장된 트랜잭션이 담긴 블록의 정보를 받아올 수 있다.
    // Block : { transactions : byteCode(컨트랙트)}
    // weeks 는 주 단위의 시간.
  }

  receive() external payable {
    // 익명함수, data(contract 를 사용하게 되었을때 데이터 변경의 data)가 없이 value만 들어왔을 때 실행
    // - 스마트 컨트랙트로 발생한 데이터 변경(함수호출)은 data 변수에 bytecode 로 변환하여 담아서 보냈었다.
    // 스마트컨트랙트 CA 계정으로 이더를 전송할때 실행된다.
    require(block.timestamp < finishTime, "This funding is over");
    donations[msg.sender] += msg.value;
    raisedAmount += msg.value;
  }

  function withdrawDonations() external {
    require(msg.sender == owner, "Funds will only be released to the owner");
    require(raisedAmount >= targetAmount, "The funding didn't reach the goal");
    require(block.timestamp > finishTime, "The funding is not over yet");

    payable(owner).transfer(raisedAmount);
  }
}
```

```bash
npm i @remix-project/remixd
npx remixd -s . -u https://remix.ethereum.org
```
