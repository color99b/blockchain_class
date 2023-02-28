# javascript 에서 solidity 활용

- 필요 라이브러리

```bash
npm i solc web3
```

기존에 썻던 방법

```bash
npx solc --bin --abi ./contracts/test.solc
```

# Geth 에서 생성한 지갑 계정 개인키 가져오기

- 필요 라이브러리

```bash
npm i keythereum
```

```js
const keyObj = keythereum.importFromFile(address, __dirname);
// 매개변수로 가져올 지갑 주소와 해당 지갑 주소에 대한 key 파일이 있는 keystore 폴더의 위치를 전달한다. (keystore 의 위치가 아닌 keystore 폴더가 있는 위치)
```
