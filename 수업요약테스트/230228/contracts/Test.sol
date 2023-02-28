// SPDX-License-Identifier: MIT
// 라이선스 표기 << 어떤 라이선스 사용하는가? 필요함
pragma solidity ^0.8.15;

// 솔리디티 버전 설정, 크립토좀비 0.5.15

contract Test {
  // contract : javascript에서의 class와 같다.
  string text;
  int result;

  constructor() {
    text = "Hi Block7";
    result = 0;
  }

  function getText() public view returns (string memory) {
    // public : 외부에서 사용가능한 데이터
    // view : 읽기 전용 데이터 처리 / pure (없어도 됨)
    // returns : 반환하는 데이터
    // memory : 함수 내에서만 변수 사용, 데이터를 외부에 저장하지 않음(지역 변수 처리)(없어도 됨)
    return text;
  }

  function setText(string memory _value) public {
    text = _value;
  }

  function getResult() public view returns (int) {
    return result;
  }

  function add(int _num, int _num2) public {
    result = _num + _num2;
  }

  function minus(int _num, int _num2) public {
    result = (_num >= _num2) ? _num - _num2 : _num2 - _num;
  }
}
