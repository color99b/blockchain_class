# 세팅

```bash
Root : 날짜폴더
mkdir swap
cd swap
npm init -y
npm i truffle @openzeppelin/contracts @remix-project/remixd
npm i -D prettier-plugin-solidity
```

# sol 파일 작성

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract Minting is ERC721 {
  constructor(
    string memory _name,
    string memory _symbol
  ) ERC721(_name, _symbol) {}

  function _minting(uint _tokenId) public {
    _mint(msg.sender, _tokenId);
  }

  function tokenURI(
    uint _tokenId
  ) public pure override returns (string memory) {
    return
      "https://gateway.pinata.cloud/ipfs/QmTKaHHuijiEDTeJM5QCgsR6vTBgzw1nkZN17ioMt7DLQ2";
  }
}
```

# Remix 사용

- https://remix.ethereum.org << 에서 사용
- Vscode에서 작성한 로컬 파일을 Remix에서 연동

```bash
npx remixd -s . --remix-ide https://remix.ethereum.org
# npx remixd -s . -u https://remix.ethereum.org

```

성공적으로 완료되면 아래처럼 git log 가 남는다.

```log
[INFO] Mon Mar 13 2023 10:16:52 GMT+0900 (대한민국 표준시) remixd is listening on 127.0.0.1:65520
[INFO] Mon Mar 13 2023 10:16:52 GMT+0900 (대한민국 표준시) slither is listening on 127.0.0.1:65523
[INFO] Mon Mar 13 2023 10:16:52 GMT+0900 (대한민국 표준시) truffle is listening on 127.0.0.1:65524
```

- -s : 로컬 폴더 위치 옵션
- -u : 연결할 주소

## 위의 bash 작업을 완료하고

- "https://gateway.pinata.cloud/ipfs/QmTKaHHuijiEDTeJM5QCgsR6vTBgzw1nkZN17ioMt7DLQ2" 로 이동
- file exploerer connect에서 localhost로 연동
- compile 후 deploy 까지한 다음 method를 사용할 수있다.

## opensea 에서 확인

- https://testnets.opensea.io/

## pinata 사용

- ipfs 서비스 웹페이지이다.
  - ipfs : InterPlanetary File system
    - 블록체인 이더리움 네트워크에서 사용하는 P2P 파일 저장 방식
  - ipfs를 사용할 경우 ubuntu, Linux 등 OS 에서 프로그램 설치
    - 간단하게 테스트 하기 위해 pinata를 사용

## NFT 객체 만들기

```json
{
  "name": "Test NFT yoyo",
  // nft 이름
  "description": "testing NFT with Pinata",
  // nft 설명
  "img": "https://gateway.pinata.cloud/ipfs/Qme5UAngWoRmVM4XURcNyKfEWcs74etgsB5eCxohyC5tCo",
  // nft 이미지 주소
  // https://gateway.pinata.cloud/ipfs/ + pinata 속 내가 올린 이미지의 CID
  // CID = URI
  "attributes": [
    // Levels 에서 출력되는 내용
    {
      "trait_type": "Rank",
      // 카테고리 이름
      "value": 1
      // 값
    },
    {
      "trait_type": "Type",
      "value": 1
    }
  ]
}
```
