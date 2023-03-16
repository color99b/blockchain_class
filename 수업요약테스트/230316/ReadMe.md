# Setting

## Front

---

```bash
yarn create react-app front --template typescript
cd front
yarn add web3 axios @metamask/providers
```

- ts react에서 window.ethereum을 코드치게 되면 error(찾을 수 없다.)
  - react-app-env.d.ts 파일(ts react 필요한 설정을 정의하는 파일 : declare 등)에 아래 문장을 추가한다.
    ```ts
    import { MetaMaskInpageProvider } from "@metamask/providers";
    declare global {
      interface Window {
        ethereum?: MetaMaskInpageProvider;
      }
    }
    ```

## Back

---

```bash
npm init -y
npm i express dotenv @openzeppelin/contracts @remix-project/remixd cors multer
npm i -D @types/node nodemon @types/express @types/multer prettier-plugin-solidity tsconfig-paths

```

- back의 package.json 설정 (scripts start)
  - start:dev 는 index.ts 를 실행한것과 같은 효과를 낸다.

```json
  "scripts": {
    "start": "node ./build/index.js",
    "start:dev": "nodemon --watch \"src/**/*.ts\" --exec \"ts-node\" src/index.ts",
    // npm run start:dev
    "test": "echo \"Error: no test specified\" && exit 1"
  },

```

## 작성순서

- 1. src - modules - useWeb3.ts 작성

- 2. app.tsx 작성

  - mainpage : metamask에 로그인하며, 로그인 되었을때 mint하는 기능 추가

- 3. src - components - mint.tsx 작성

  - nftName, nftDescription, file 를 업로드할 수 있게설정.

  - ts에서 e.target.value와 같은 (e)=> 코드를 쓰게 되면 type 이 any로 지정되며 ts가 찾지 못한다. 아래 코드 추가

- 4. src - components - List.tsx 작성

  - 작성했던 nft 목록을 불러올 수 있게 작성.

- 5. back 에 tsconfig.json 설정

- 6. back -src - index.ts 작성

- 7. pinata 사용을 위한 pinataSDK 설치 및 6번에 아래코드추가
  ```ts
  npm i @pinata/sdk;
  import pinataSDK from "@pinata/sdk";
  const pinata = new pinataSDK(process.env.API_Key, process.env.API_Secret);
  ```
- 8. 7번을 위한 .env 파일 작성
     `bash
      API_Key = {pinata API KEY}
      API_Secret= {pinata API Secret}
`

  ```ts
  import { FormData } from "react";

  const nameInput = useCallback((e: FormEvent<HTMLInputElement>) => {
    setNFTname(e.currentTarget.value);
  }, []);
  ```

## TypeScript

---

```bash
npm list -g
# typescript, ts-node 없을 시 설치
npm i -g typescript ts-node
```

- ts에서는 변수 = 구문 하는데 구문의 return값의 type을 변수에 할당하는 구조이기때문에 구문의 return 값에 대한 type을 정의해주어야한다. await는 promise 기 때문에 type의 유추가 불가능하기 때문에 await문은 type을 명시해주어야하고, type이 명확한 경우는 명시하지 않아도 된다.

```ts
const [_account]: Array<string> = (await window.ethereum.request({
  method: "eth_requestAccounts",
})) as Array<string>;
```

---

# React Hook

```ts
const temp = () => {};
const temp1 = useCallback(() => {});
두 개가 같은 뜻이다.

const [temp, setTemp] = useState()
useEffect(()=>{
  setTemp();
},[])
const temp = useCallback(()=>{},[])
//두 개가 같은 뜻이다. 위 방법이 좀더 번거로움
//useEffect는 조건에 따라 코드를 실행하는 느낌, useCallback은 조건에따라 선언한다는 느낌
// 두 개다 표현식이 [] 이므로 렌더링될때마다가 아닌 mount 될때 딱 한 번 실행하라는 뜻.
```
