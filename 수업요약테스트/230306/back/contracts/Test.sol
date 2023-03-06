// SPDX-License-Identifier: MIT
// fier: MIT 할때 fier 하고 : 를 띄우면 에러남
pragma solidity ^0.8.18;

contract Test {
  int public num;
  string public text;
  int[] public numArr;
  string[] public textArr;
  address public owner;

  mapping(string => uint) public balance;

  constructor(string memory _text) {
    num = 1;
    text = "testing";
    text = _text;
    owner = msg.sender;
  }
}
