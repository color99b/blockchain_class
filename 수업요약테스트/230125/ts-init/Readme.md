```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

- compilerOptions : Compiler에 적용할 설정들.
  -target : 어떤 버전의 js로 변환할 것인지 설정 (es2016 : ES7 문법)
  -module : export, module.exports / import, require 에 있어서 어떤 문법을 쓸 것인지 설정.
  -> commonJS : ES5 이하 문법(module.exports, require)를 사용하도록 설정

  -esModuleInterop : commmonJs 방식, 즉 module.exports 방식으로 내보내진 라이브러리, 모듈에 대해서 "import \* as XXXX" 같은 방식을 사용할 수 있게 해주는 설정.

  ```js
  import * as from "react";
  ```

  -forceConsistentCasingInFileNames : 가져오기 시 대소문자 구분을 확실하게 해준다.

  ```js
  import a from "a.ts";
  import A from "A.ts";
  ```

  - strict : 정확한 사용을 위해 모든 검사 설정을 활성화
  - skipLipCheck : .d.ts 파일의 타입 확인을 건너뛴다.

  # .d.ts 파일

  - 타입 선언 파일이라고 부르며 코드에서 사용할 타입들을 미리 선언해둔다.
  - 설정에 따라 선언해둔 타입을 전역에서 사용할 수 있다.
    -> number, string 등의 사용과 같이 타입을 require, import 없이 가져와서 사용할 수 있다.
