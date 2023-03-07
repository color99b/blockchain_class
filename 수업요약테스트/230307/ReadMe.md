# Truffle, React, Express 기본 세팅

```bash
yarn create react-app front
mkdir back
cd back
npm init -y
npm i -D prettier-plugin-solidity
npm i truffle express web3 cors
npx truffle init
cd ../front
yarn add web3 axios
```

- y를 붙일경우 생성에 필요한 것들을 자동으로 완료한다.
  - node.js 의 경우 init 시 프로젝트명, 라이센스 등의 입력이 필요하지만, -y 옵션을 사용 시 기본값으로 처리하여 완료한다.
  - apt-get install 의 경우 프로그램 설치 시 사용자의 동의가 필요하지만 동의를 -y옵션으로 추가하여 중간에 멈추지 않고 설치한다.

# Front 에서 web3 연결

- useWeb3.js 파일작성
- custom hook으로 사용

- Back에서 express 작성

# 투표 DApp

- back/contracts 에 Vote.sol 파일 작성

```

```

- mapping(키 -> 값) 옵션 이름

  - 이름[키] = 값

- Truffle 사용해서 compile, migration

- front에서 app.js 작성

## 솔리디티 작성 시 주의사항

- require(조건) : 조건을 만족하면 넘어가고 만족하지못하면 코드를 끝낸다.

- string 과 string 은 비교할 수 없다. (길이부터 자세한 정보를 전부 알아야함)
  - js처럼 간단하게 안에만 띡 할 수 없음
- 구조체 와 구조체 역시 위와 같은 이유로 비교할 수 없음

-> 해결방법 : keccak256 으로 hash화해서 비교를 진행
-> keccak256("매개변수") 일때 매개변수로 바로 전달하면 유니코드를 제대로 인식하지 못하여 오류가 발생한다. abi.encodePacked 메서드 안에 매개변수를 넣는다 (16진수로 변환 후 해쉬화 해주는 것)

```solidity
  function validCandidate(string memory candidate) private view returns (bool) {
    for (uint i=0; i<candidateList.length; ++i){
      if(candidateList[i] == candidate) return true;
      //여기서 에러 발생 아래 문장으로 수정
   if (
        keccak256(abi.encodePacked(candidateList[i])) ==
        keccak256(abi.encodePacked(candidate))
      ) return true;

    }
    return false;
  }
```
