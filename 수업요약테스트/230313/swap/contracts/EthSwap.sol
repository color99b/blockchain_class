// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EthSwap {
  ERC20 public token;
  uint public rate = 100;

  constructor(ERC20 _token) {
    //ERC20 토큰 생성 시 CA를 받아서 바로 생성할 수 있다.
    token = _token;
  }

  function getToken() public view returns (address) {
    return address(token);
  }

  function getSwapBalance() public view returns (uint) {
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
  }

  function buyToken() public payable {
    uint256 tokenAmount = msg.value * rate;
    require(token.balanceOf(address(this)) >= tokenAmount);
    token.transfer(msg.sender, tokenAmount);
  }

  function sellToken(uint _amount) public payable {
    // 토큰으로 ether를 산다
    require(token.balanceOf(msg.sender) >= _amount);
    // 트랜잭션 보낸 계정의 토큰 잔액을 확인
    uint etherAmount = _amount / rate;
    // 토큰을 기준으로 Ether를 계산

    require(address(this).balance >= etherAmount);
    //현재 컨트랙트에 충분한 ether가 있는지 확인
    token.transferFrom(msg.sneder, address(this), _amount);
    // 토큰을 트랜잭션 보낸 계정에서 컨트랙트로 전송
    payable(msg.sender).transfer(etherAmount);
    // ether 트랜잭션 보낸 계정에게 전송
  }
}
