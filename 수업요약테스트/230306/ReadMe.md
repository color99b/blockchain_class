# Solidity 문법

- 타입 (자료형)

  - int : 정수
  - string : 문자열
  - \*\*\*[] : 배열
  - address : 주소(0x~~~)

- msg.sender : 보낸 지갑 계정
- mapping : JavaScript의 객체와 비슷하다.

  - hashMap, 키는 저장되지 않는다.
  - 형식은 mapping(키 => 값) 매핑이름
  - hashMap은 키를 hash화하여 해당 메모리주소에 값을 저장한다.

  ```js
  let test = [];
  test[24213] = "sawd";
  test["key의 hash"] = "값";
  ```

- constructor 에 매개변수 전달

  - 함수의 매개변수 저장 위치
    - options
      - storage : 블록체인 네트워크에 저장하여 공유된다.
      - memory : 함수 내에서만 사용하고 버린다.
    - struct , array, mapping 에 사용할 수 있다.
      - int는 정수형 타입으로 배열로 나타낼 수 없다.
      - string은 문자열로 배열처럼 메모리를 사용한다.

- 1_deploy_Test.js 에서의 매개변수 전달
  - artifacts , "" , "', "", 이런식으로 쭉 나열하면 된다.

```js
deployer.deploy(Test, "asdf?");
deployer.deploy(Test, "asdf?", "ㅁㄴㅇ", "123");
```

- 배포한 지갑 주소 확인하기

```bash
npx truffle console
Test.deployed().then(instance => test = instance)
test.owner()
web3.eth.getTransactionReceipt("transaciton hash")
// 0x7fabd678e93c6bd5bfea242ebc21f9aba7caa91c028c9aa6c85303f32795ba8a
```

```js
const deployed = new web3.eth.Contract(abi, CA);
// deployed, 이미 배포된 스마트 컨트랙트 정보를 가져온다.
```

- Test 객체가 이미 abi와 CA를 갖고 있다.
  - Test 의 deployed 메서드를 호출하면 위의 JS 코드처럼 배포된 스마트 컨트랙트 정보를 가져온다. 단 Promise 형식이다.
  - Promise 형식에 따라 then을 사용하여 배포된 스마트 컨트랙트를 가져오는데 성공하면 가져온 객체를 test에 정의한다.
  - 이후 test로 스마트 컨트랙트의 메서드, 변수들을 호출할 수 있다.

## MIT 라이센스

- MIT 에서 학교 학생들을 돕기 위해 개발한 라이센스
