# TypeScript

- 마이크로 소프트에서 만든 js 기반 프로그래밍 언어(js의 슈퍼셋-> 상위호환)
- js에 Type, 자료형 확인을 추가한 것,
- 기본적 설치 : npm i -D typescript
- 바로 실행되는 것이 아니라 js를 tsc(typeScriptCompiler)로 변환 후 사용한다.
  -> Compiler 란 작성한 코드를 컴퓨터언어로 변환해준다. C++, Java 등에서 주로 사용.
  -> 브라우저, node.js에서 바로 사용할 수 없다.

# interface

- Type을 미리 정의해두는 것 - 일반적인 변수에 사용가능.
- class 에 상속이 가능하다.

## TSC

- tsc -v : 버전을 확인한다.
- tsc 파일이름 : js로 파일을 변환한다.(tsconfig.json 파일의 설정 무시) => 컴파일
- npx tsc : npm i -D typescript로 설치했을 때 실행 명령어.
- tsc : npm i -g typescript 로 설치했을때 실행 명령어
  -> 파일명 없이 tsc만입력했을땐 tsconfig.json 파일의 설정을 기준으로 컴파일한다 설정이 별도로 되어 있지 않을땐 일단 경로내 모든 ts파일 컴파일.

# 사용하는 이유

- Js의 높은 자유도 및 동적인 처리는 프로젝트가 커질수록 에러를 많이 유발할 수 있다.
- Compiler Error
  -> function plus(a,b){
  const c= a+b;
  return c;
  }
  const a= 1;
  const b = "1234";

---

function plus(a:number, b:number):number{
const c:number = a+b;
return c;
}
const a:number = 1;
const b:number ="123";

---

위처럼 있을 때
js는 프로그램이 돌다가 숫자와 문자를 더하는 문장에서 에러가 발생하며 다운되는 반면, ts는 프로그램이 돌기전 comile 과정에서 에러가 나기에 디버그도 쉽고, 프로그램 실행중 다운을 막을 수 있다. -> type을 명시함으로써 미리 선언될 수 없는 변수들 차단

- IDE와 호환성이 좋다.
  -> 프로그래머가 소프트웨어 코드를 효율적으로 개발하도록 돕는 소프트웨어 애플리케이션. vs code 같은 것.

# 단점

- 코드 작성에 설정해야할 것이 js보다 많아서 코드 줄 수나 코딩 시간자체는 늘어날 수 있다.
