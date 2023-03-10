# setting

```bash
날짜 root폴더
mkdir erc20
cd erc20
npm init -y
npm i truffle
npm i -D prettier-plugin-solidity
npx truffle init
npm i truffle @openzeppelin/contracts

mkdir erc721
cd erc721
npm init -y
npm i truffle
npm i -D prettier-plugin-solidity
npx truffle init

```

# ERC20 폴더

## B7Token.sol 작성

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// ERC20 토큰 가져오기
contract B7Token is ERC20 {
  // ERC20 토큰 상속
  constructor(
    string memory _name,
    string memory _symbol,
    uint _amount
  ) ERC20(_nanme, _symbol) {
    // ERC20의 constructor를 호출 => js에서 super와 같다.
    _mint(msg.sender, _amount * 10 ** 18);
  }
}
```
