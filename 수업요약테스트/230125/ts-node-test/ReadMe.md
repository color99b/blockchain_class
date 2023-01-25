# ts-node

- TypeScript 실행 라이브러리(npm 홈페이지에서는 엔진이라고 표현됨)
- Compile 없이 ts파일을 실행한다.
- compile 과정이 없다 뿐이지 시간은 더 오래걸릴 수 있음.

```sh
npm i -D ts-node typescript @types/node
npx ts-node index.ts
```

```json
{
  "include": ["src"], // ts에서 확인할 폴더를 설정
  "exclude": ["node_modules"], //ts에서 확인하지 않을 폴더를 설정
  "compilerOptions": {
    // 컴파일 설정
    "outDir": "./build", // 컴파일시 js 파일 생성되는 폴더 설정
    "target": "ES6", // js변환시 적용할 문법 설정
    "lib": ["ES6"], // js 실행되는 환경 설정
    "moduleResolution": "node", //
    "esModuleInterop": true,
    "resolveJsonModule": true, //ts에서 기본적으로 json파일을 지원하지 않기에 true로 json 파일 지원하도록 설정
    "removeComments": true, // 컴파일시 주석 삭제
    "allowJs": true, // js파일 도한 컴파일
    "baseUrl": ".", // root 폴더 설정
    "typeRoots": ["./node_modules/@types"] // type 설정 파일들을 설정 (미리 읽기 가능) -> .d.ts 파일 작성하는 곳을 설정  (interface 등등)
  }
}
```
