import { reducer } from "./reducerTest";
import { useReducer, useState } from "react";
//action : 요청 / 어떤일을 해달라고 할지, 그 내용과 데이터를 가진 변수.
//              목적(type), 목적에 필요한 자료(payload)

//dispatch : 요청을 받아서 일할 reducer 에 전달하는 함수.
// setState => state에 적용된다.
// dispatch => reducer 가 해당 내용을 가지고 작업을 한 후 state에 적용.
// reducer : dispatch 가 전달한 데이터로 작업을 진행한 후 결과를 state에 정의한다.

export default function ReducerTest2() {
  const [count2, count2Dispatch] = useReducer(reducer, 0);

  //qwe
  const [count, setCount] = useState(0);

  const plus = () => {
    const tempCount = count + 1; //로직이 들어갔다.
    setCount(tempCount);
  };

  const minus = () => {
    const tempCount = count - 1;

    setCount(tempCount);
  };

  const nanugi = () => {
    const tempCount = count / 10;
    setCount(tempCount);
  };

  const multi = () => {
    const tempCount = count * 10;
    setCount(tempCount);
  };

  return (
    <div>
      <div>count: {count}</div>
      <div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
      <div>count2: {count2}</div>
      <div>
        <button onClick={() => count2Dispatch({ type: "plus" })}>+</button>
        <button onClick={() => count2Dispatch({ type: "minus" })}>-</button>
      </div>
    </div>
  );
}
