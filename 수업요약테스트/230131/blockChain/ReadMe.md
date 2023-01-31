# blockChain typescript

- 설치 명령어

```sh
npm i -D typescript ts-node @types/node
npm i crypto-js hex-to-binary merkle
npm i -D @types/crypto-js @types/merkle
```

- 타입에 대한 전역 초기화

  - @types 에 모두 모아둔다.
  - tsconfig.json 파일에 아래 내용 추가

  ```json
  {
    "compilerOptions": {
      "typesRoots": ["./@types"]
    }
  }
  ```

- 파일에 대한 별칭 설정
  -import 시에 별칭으로 짧게 불러올 수 있다.
  ```json
  {
    "compilerOptions": {
      "paths": {
        "@core/*": ["src/core/*"],
        "*": ["@types/*"],
        "@json/*": ["src/json/*"]
      }
    }
  }
  ```
  위 코드를 아래와 같이 쓸 수 있다.

```js
import a from "src/core/a.ts";
import a from "@core/a.ts";
```

# declare

- tsc 에게 타입이 선언되었음을 알린다.
- 컴파일 시 포함되지 않는다.

# .d.ts 파일 불러오기 오류 해결

- npm i -D tsconfig-paths
- tsconfig.json 파일에 아래 내용 추가

```json
"ts-node" :{
  "files":true,
  "require" : ["tsconfig-paths/register"]
}
```

- ts-node : ts-node 실행 시 설정
  - files : declare 가져오기 시 발생하는 에러 해결 -> 전역에서 사용할 수 있게 한다.
  - require : 터미널에서 ts-node 실행 시 필요한 라이브러리를 설정.-> 경로지정 같은 느낌 없으면 아래와 같이 실행.
  ```sh
  npx ts-node -r tsconfig-paths/register src/core/block/block.ts
  ```
  있으면 아래와 같이 실행
  ```sh
  npx ts-node src/core/block/block.ts
  ```
