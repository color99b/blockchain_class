// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract TestToken {
  mapping(address => uint256) public balances;
  string public name = "dog";
  string public symbol = "DG";
  uint8 public decimals = 18;
  uint public totalSupply = 10000 * 10 ** decimals; // 10의 10000 제곱수이므로 현재 만개가 발행되었다는 뜻

  constructor(string memory _symbol) {
    balances[msg.sender] = totalSupply;
    symbol = _symbol;
  }

  function balanceOf(address _owner) public view returns (uint balance) {
    return balances[_owner];
  }

  function transfer(address _to, uint _value) public returns (bool success) {
    require(balances[msg.sender] >= _value);
    balances[msg.sender] -= _value;
    balances[_to] += _value;
    return true;
  }
}
