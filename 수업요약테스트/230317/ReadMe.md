# 세팅

```bash
Root : 날짜폴더
npm init -y
npm i truffle @openzeppelin/contracts
npx truffle init
npm i -D prettier-plugin-solidity
```

```bash
npm i -D @types/express @types/multer @types/node nodemon tsconfig-paths
```

위는 ts 설정이므로 tsconfig.json 파일생성 필요

```json
{
  "exclude": ["node_modules"],
  "compilerOptions": {
    "outDir": "./build/",
    "target": "ES6",
    "lib": ["ES6"],
    "moduleResolution": "node",
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "removeComments": true,
    "allowJs": true,
    "baseUrl": ".",
    "typeRoots": ["./node_modules/@types", "./@types"],
    "paths": {
      "@core/*": ["src/core/*"],
      "*": ["@types/*"]
    }
  },
  "ts-node": {
    "files": true,
    "require": ["tsconfig-paths/register"]
  }
}
```

# 순서

1. nftToken.sol 파일 작성

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/utils/Strings.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract NftToken is ERC721Enumerable, ERC721URIStorage, Ownable {
  using Counters for Counters.Counter;
  // solidity 내에서 라이브러리를 사용하는것
  Counters.Counter private _tokenId;
  // 라이브러리속 구조체를 _tokenId 로 선언했다.
  // 아래 counters library 참조

  constructor(
    string memory _name,
    string memory _symbol
  ) ERC721(_name, _symbol) {}

  function _beforeTokenTransfer(
    address from,
    address to,
    uint firstTokenId,
    uint batchSize
  ) internal override(ERC721, ERC721Enumerable) {
    super._beforeTokenTransfer(from, to, firstTokenId, batchSize);
  }

  function _burn(uint tokenId) internal override(ERC721, ERC721URIStorage) {
    super._burn(tokenId);
  }

  function supportsInterface(
    bytes4 interfaceId
  ) public view override(ERC721, ERC721Enumerable) returns (bool) {
    return super.supportsInterface(interfaceId);
  }

  function tokenURI(
    uint tokenId
  ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
    return super.tokenURI(tokenId);
  }

  //----
  //위 코드 까지는 ERC721Enumerable과 ERC721URIStorage를 동시에 상속받다보니 method 명이 겹쳐서 (둘다 ERC721을 상속받은 contract이기 때문에) 두개 중에 어떤 method를 사용할건지 override 해주는 method들 이다.

  function _baseURI() internal pure override returns (string memory) {
    return "https://gateway.pinata.cloud/ipfs/";
  }
  // token이 저장하는 주소에 있어서 기본적인 URI를 정해주는 method

  function safeMint(string memory uri) public {
    uint tokenId = _tokenId.current();
    _tokenId.increment();
    _safeMint(msg.sender, tokenId);
    //_safeMint(address to, uint256 tokenId)
    //새 토큰을 안전하게 발행하는 내부 기능. 주어진 토큰 ID가 이미 존재하는 경우 되돌립니다.
    //대상 주소가 계약이면, onERC721Received method를 구현하고, 이 method는 안전한 전송시 호출되어 magic value를 return 한다.
    // magic value : bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"));
    // onERC721Received : ERC721 smart contract가 IERC721.safeTransferFrom 함수가 실행되고 난후 호출하는 method로, 함수 선택자가 없으면 트랜잭션을 되돌린다. 아마 안전하게 전송되어 받았다는 메소드로 추정
    _setTokenURI(tokenId, uri);
  //주어진 토큰에 대한 토큰 URI를 설정하는 내부 함수입니다.
  //토큰 ID가 없으면 되돌립니다.

  }
}

reference : https://docs.openzeppelin.com/contracts/2.x/api/token/erc721#ERC721Metadata-_setTokenURI-uint256-string-
```

```solidity
# Counter 라이브러리 코드
// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.4.1 (utils/Counters.sol)

pragma solidity ^0.8.0;

/**
 * @title Counters
 * @author Matt Condon (@shrugs)
 * @dev Provides counters that can only be incremented, decremented or reset. This can be used e.g. to track the number
 * of elements in a mapping, issuing ERC721 ids, or counting request ids.
 *
 * Include with `using Counters for Counters.Counter;`
 */
library Counters {
    struct Counter {
        // This variable should never be directly accessed by users of the library: interactions must be restricted to
        // the library's function. As of Solidity v0.5.2, this cannot be enforced, though there is a proposal to add
        // this feature: see https://github.com/ethereum/solidity/issues/4637
        uint256 _value; // default: 0
    }

    function current(Counter storage counter) internal view returns (uint256) {
        return counter._value;
    }

    function increment(Counter storage counter) internal {
        unchecked {
            counter._value += 1;
        }
    }

    function decrement(Counter storage counter) internal {
        uint256 value = counter._value;
        require(value > 0, "Counter: decrement overflow");
        unchecked {
            counter._value = value - 1;
        }
    }

    function reset(Counter storage counter) internal {
        counter._value = 0;
    }
}
```

2. SaleToken.sol 작성

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./NftToken.sol";

contract SaleToken {
  NftToken public Token;

  constructor(address _tokenAddress) {
    Token = NftToken(_tokenAddress);
  }

  struct TokenInfo {
    uint tokenId;
    uint price;
    string tokenURI;
  }

  mapping(uint => uint) public tokenPrices;
  uint[] public SaleTokenList;

  function SalesToken(uint _tokenId, uint _price) public {
    address tokenOwner = Token.ownerOf(_tokenId);

    require(tokenOwner == msg.sender);
    require(_price > 0);
    require(Token.isApprovedForAll(msg.sender, address(this)));

    tokenPrices[_tokenId] = _price;
    SaleTokenList.push(_tokenId);
  }

  function PurchaseToken(uint _tokenId) public payable {
    address tokenOwner = Token.ownerOf(_tokenId);

    require(tokenOwner != msg.sender);
    require(tokenPrices[_tokenId] > 0);
    require(tokenPrices[_tokenId] <= msg.value);

    payable(tokenOwner).transfer(msg.value);
    Token.transferFrom(tokenOwner, msg.sender, _tokenId);

    tokenPrices[_tokenId] = 0;
    popSaleToken(_tokenId);
  }

  function cancelSaleToken(uint _tokenId) public {
    address tokenOwner = Token.ownerOf(_tokenId);

    require(tokenOwner == msg.sender);
    require(tokenPrices[_tokenId] > 0);

    tokenPrices[_tokenId] = 0;
    popSaleToken(_tokenId);
  }

  function popSaleToken(uint _tokenId) private returns (bool) {
    for (uint i = 0; i < SaleTokenList.length; i++) {
      if (SaleTokenList[i] == _tokenId) {
        SaleTokenList[i] = SaleTokenList[SaleTokenList.length - 1];
        SaleTokenList.pop();
        return true;
      }
    }
    return false;
  }

  function getSaleTokenList() public view returns (TokenInfo[] memory) {
    require(SaleTokenList.length > 0);

    TokenInfo[] memory list = new TokenInfo[](SaleTokenList.length);

    for (uint i = 0; i < SaleTokenList.length; i++) {
      uint tokenId = SaleTokenList[i];
      uint price = tokenPrices[tokenId];
      string memory tokenURI = Token.tokenURI(tokenId);

      list[i] = TokenInfo(tokenId, price, tokenURI);
    }
    return list;
  }

  function getOwnerTokens(
    address _tokenOwner
  ) public view returns (TokenInfo[] memory) {
    uint balance = Token.balanceOf(_tokenOwner);
    require(balance > 0);

    TokenInfo[] memory list = new TokenInfo[](balance);

    for (uint i = 0; i < balance; i++) {
      uint tokenId = Token.tokenOfOwnerByIndex(_tokenOwner, i);
      uint price = tokenPrices[tokenId];
      string memory tokenURI = Token.tokenURI(tokenId);

      list[i] = TokenInfo(tokenId, price, tokenURI);
    }
    return list;
  }

  function getLatestToken(
    address _tokenOwner
  ) public view returns (TokenInfo memory) {
    uint balance = Token.balanceOf(_tokenOwner);
    uint tokenId = Token.tokenOfOwnerByIndex(_tokenOwner, balance - 1);
    uint price = tokenPrices[tokenId];
    string memory tokenURI = Token.tokenURI(tokenId);
    //원래는 여기에 rank랑 type을 적었는데, pinata로 따로 빼기위해 여기서는 제외했다.
    return TokenInfo(tokenId, price, tokenURI);
  }
}


```

3. remix와 연동.

```bash
npm i @remix-project/remixd
npx remixd -s . -u https://remix.ethereum.org
```

후 홈페이지에서 nftToken contract 발행후 CA를
saleToken에 넣어 contract 발행

4. nft CA와 sale CA를 담은 .env Back 폴더아래 작성.

```bash
API_Key =7935587079ca75655896
API_Secret= e3f28fda7d0da9de5bfaacaf78591602dfee45f8544a9388ebb66e3bf31c4f7f
NFT_CA=0xBad12b779C8d73Bb346acC72d1cfE780A34537c8
SALE_CA=0x3ad5FF286c890A4f4cB08d1B9D409D0Bb69cBB11
```

5. back -> src -> index.ts 작성

```ts

```
