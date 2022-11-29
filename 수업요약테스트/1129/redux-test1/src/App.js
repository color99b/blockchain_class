import logo from "./logo.svg";
import "./App.css";
import store from "./store";
import { useState } from "react";
import { COUNT1, actions as count1Actions } from "./action/count1";
function App() {
  const [inputCount, setCount] = useState(0);
  const [_, setRender] = useState(false);
  // _ 란 보통 사용하지 않을 변수의 이름으로 설정
  //_ 라는 라이브러리도 있다. ( lowbar )
  return (
    <>
      <div>
        <input
          type={"number"}
          onInput={(e) => {
            setCount(+e.target.value);
          }}
          placeholder="number"
        />

        <button
          onClick={() => {
            store.dispatch(count1Actions.plus(inputCount));
            setRender((state) => !state);
          }}
        >
          +
        </button>
      </div>
      {store.getState().count1}
      <div>
        <input
          type={"number"}
          onInput={(e) => {
            setCount(+e.target.value);
          }}
          placeholder="number"
        />

        <button
          onClick={() => {
            store.dispatch(count1Actions.minus(inputCount));
            setRender((state) => !state);
          }}
        >
          -
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            store.dispatch({
              type: "count2/plus",
              payload: {},
            });
            setCount(store.getState().count2);
            setRender((state) => !state);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            store.dispatch({
              type: "count2/minus",
              payload: {},
            });
            setCount(store.getState().count2);
            setRender((state) => !state);
          }}
        >
          -
        </button>
        {store.getState().count2}
        {/* //store.getState는 그 속의 인자를 가져올 수 있다. */}
        {/* store.getState로 받아온 store의 객체는 react의 랜더링에 관여하지 못함. */}
        {/* 그래서 class 컴포넌트에서는 forceupdate()를 사용해서 강제로 랜더링 */}
        {/* function 컴포넌트에서는 state를 하나 만들어서 setState로 강제 */}
      </div>

      {/* array  실험 */}

      <div>
        <input
          id="addArr"
          onInput={(e) => {
            e.preventDefault();
            setCount(+e.target.value);
          }}
        />
        <button
          onClick={() => {
            store.dispatch({
              type: "tempArr/insert",
              payload: { input: document.getElementById("addArr").value },
            });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            store.dispatch({
              type: "tempArr/delete",
              payload: {},
            });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            store.dispatch({
              type: "tempArr/edit",
              payload: { input: document.getElementById("addArr").value },
            });
          }}
        >
          -
        </button>
        끼야호
        {/* //store.getState는 그 속의 인자를 가져올 수 있다. */}
      </div>
    </>
  );
}

export default App;
