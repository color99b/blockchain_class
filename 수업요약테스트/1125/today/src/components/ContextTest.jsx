//useContext 라는 Hook을 사용한다.
// Context란 무엇인가? 전역 상태 관리이다.
// let, const 같은 명령어로 변수를 지정했다 했을때
// React에서 사용하는 변수, 상태값들은 거의 대부분이 지역변수, 상태값
// 상태값은 무조건 지역 스코프에 포함되어 외부로 나갈 수 없다.
// 전역 스코프에서 상태값을 쓰고싶다 -> Context라는 녀석.

import { createContext, useContext, Component, useState } from "react";
const TextContext = createContext();

export default function ContextTest() {
  const [num, setNum] = useState(12);
  return (
    // 하위 컴포넌트 내에서 어디서든지 변수를 쓸 수 있도록
    // Provider 컴포넌트로 감싼다.
    // Provider 컴포넌트의 value props를 사용해 전역 변수로 사용할
    // 데이터 값을 정의한다.
    <TextContext.Provider value={{ num, setNum }}>
      {/* //value ={num} 이런식으로 보내면 num은 js코드가 됨.
      // 따라서 변수 또는 배열 또는 객체로 보내는데 다수는 배열객체로 묶어서
      // 보내는것임 */}
      <Child1 />
    </TextContext.Provider>
  );
}

function Child1({}) {
  return <Child2 />;
}

function Child2({}) {
  return <Child3 />;
}

function Child3({}) {
  const item = useContext(TextContext);

  return (
    <>
      <div
        onClick={() => {
          item.setNum(item.num - 1);
        }}
      >
        child3:{item.num}
        <Child4 />
      </div>
    </>
  );
}

function Child4({}) {
  return <Child5 />;
}

function Child5({}) {
  const item = useContext(TextContext);
  // Context를 가져오기 위해 useContext를 사용한다.
  // 매개변수로 생성한 context를 전달한다.
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        item.setNum(item.num + 1);
      }}
    >
      child5{item.num}
      <Child6 />
    </div>
  );
}

class Child6 extends Component {
  render() {
    return (
      <TextContext.Consumer>
        {(item) => <div>Child6{item.num}</div>}
      </TextContext.Consumer>
    );
  }
}
