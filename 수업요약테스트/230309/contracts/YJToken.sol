// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./ERC20.sol";

contract YJToken is ERC20 {
  address public owner;
  //토큰 등록자
  uint public ethCanBuy = 100;

  // 토큰 가격

  constructor(string memory _name, string memory _symbol, uint _amount) {
    owner = msg.sender;
    name = _name;
    symbol = _symbol;

    mint(_amount * 10 ** decimals);
  }

  receive() external payable {
    // 익명 함수 이다.
    require(msg.value != 0);
    // 트랜잭션에 value가 없으면 멈춘다.
    uint amount = msg.value * ethCanBuy;
    //받은 ether를 토큰으로 변환한다.
    require(balances[owner] >= amount);
    //
    balances[owner] -= amount;
    balances[msg.sender] += amount;
    if (msg.sender == owner) {
      //만약 발행자가 트랜잭션을 보냈다면 토큰을 추가로 발행한다.
      mint(amount);
    }

    emit Transfer(owner, msg.sender, amount);
  }
}
