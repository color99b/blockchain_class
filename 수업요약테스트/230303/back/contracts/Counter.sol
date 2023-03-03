// SPDX-License-Identifier: MIT
// 라이선스 표기 << 어떤 라이선스 사용하는가? 필요함
pragma solidity ^0.8.18;

// 솔리디티 버전 설정, 크립토좀비 0.5.15
// 이벤트가 contract명과 같으면 에러가난다.
contract Counter {
  int256 private result;
  event Result(int256 result);

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
    emit Result(result);
  }

  function decrement() public {
    result--;
    emit Result(result);
  }
}
