# 세팅

```bash
Root : 날짜폴더
mkdir swap
cd swap
npm init -y
npm i truffle @openzeppelin/contracts
npm i -D prettier-plugin-solidity
```

# 토큰 스왑

- token swap : 이름 그대로 토큰을 다른 토큰으로 변경
- 보통 이전 토큰을 새로운 토큰으로 교환
- 거래소에서 '스왑기간', '스왑 지원 거래소' , '마이그레이션 지원' 등으로 토큰 스왑 기능 지원을 표기한다.
- 토큰의 업데이트, 돈을 벌기 위한 방법

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EthSwap {
  ERC20 public token;
  // 기존에 만든 토큰을 저장하여 사용
  // 1 Ether = 100token;
  uint public rate = 100;

  constructor(ERC20 _token) {
    //ERC20 토큰 생성 시 CA를 받아서 바로 생성할 수 있다.
    token = _token;
    // deployer.deploy("token", "CA전달")
  }

  function getToken() public view returns (address) {
    //토큰을 받아온다.
    return address(token);
    //토큰의 CA를 반환한다.
  }

  function getSwapBalance() public view returns (uint) {
    // 트랜잭션 보낸 계정의 토큰 잔액을 확인한다.
    return token.balanceOf(msg.sender);
  }

  function getThisAddress() public view returns (address) {
    // 현재 스마트 컨트랙트 (EthSwap)의 CA를 반환한다.
    return address(this);
  }

  function getMsgSender() public view returns (address) {
    return msg.sender;
  }

  function getTokenOwner() public view returns (address) {
    return token._owner;
    //토큰 배포자를 반환한다 -> 토큰에 대한 스마트 컨트랙트 등록자
  }

  function buyToken() public payable {
    // Ether 로 토큰을 산다
    uint256 tokenAmount = msg.value * rate;
    // 보낸 ether를 토큰으로 변환
    require(token.balanceOf(address(this)) >= tokenAmount);
    //현재 컨트랙트에 토큰이 트랜잭션 보낸 계정에 줄 만큼 있는지 확인
    token.transfer(msg.sender, tokenAmount);
    // 토큰 전송
  }
}
```

## Swap 스마트 컨트랙트는 토큰의 변경을 위해 사용하기 때문에 기존의 블록에 등록된 토큰을 변경할 수 없다.

- 거래 관련 내용만 존재한다.
