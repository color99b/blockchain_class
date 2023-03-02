// SPDX-License-Identifier: MIT
// 라이선스 표기 << 어떤 라이선스 사용하는가? 필요함
pragma solidity ^0.8.18;

contract Review {
  int256 private result;

  constructor() {
    result = 0;
  }

  function getResult() public view returns (int256) {
    return result;
  }

  function increment() public {
    result++;
  }

  function decrement() public {
    result--;
  }
}
