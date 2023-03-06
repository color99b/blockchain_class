# 토큰 구현

- 토큰은 Ethereum 기반이다.
  - ERC721, ERC1155 << 많이 알려진 토큰
    - ERC721(NFT) : 하나의 NFT는 하나의 소유자를 갖는다.
    - ERC1155(NFT) : 하나의 NFT는 다수의 소유자를 갖는다.
  - ERC223, ERC 621, ERC777
- 가장 기본적인 토큰으로 ERC20 이라고 한다.
  - Ethereum Request for Comment 20
  - 이더리움 블록체인 네트워크에서 정한 표준 토큰
  - 스마트 컨트랙트로 생성
- FT / NFT
  - FT : Fungible Token -> 대체 가능한 토큰
  - NFT : Not Fungible Token -> 대체 불가능한 토큰
  - FT : 만원짜리 / NFT 는 고유1개한정 콜라보 만원
- 아래의 코드는 내용을 최소화한 간단한 코드기에 완벽작동은 아니다.

```solidity
contract TestToken {
  mapping(address => uint256) public balances;
  string public name;
  string public symbol;
  uint8 public decimals;
  uint public totalSupply;
}
```

- balances : 각 지갑 계정에 대한 잔액
- name : 토큰 이름 (Ether)
- symbol : 토큰 단위 (ETH)
- decimals : 소수점의 개수(10 의 몇제곱수인가? wei와 ether의 관계)
- totalSupply : 총 발행량

```solidity
  function balanceOf(address _owner) public view returns (uint balance) {
    return balances[_owner];
  }

  //view : 함수에서 변수를 호출하지만 수정하진 못한다. (js의 const 변수)
```

잔액 보내기

```solidity
  function transfer(address _to, uint _value) public returns (bool success) {
    require(balances[msg.sender] >= _value);
    balances[msg.sender] -= _value;
    balances[_to] += _value;
    return true;
  }
```

- require : 조건을 확인하여 에러를 발생시키거나 코드를 계속 진행한다.
  - 첫 번째 매개변수로 조건을 전달하며 true , false 를 판별한다.
  - 두 번째 매개변수로 에러시 출력할 로그를 전달한다.
