import logo from "./logo.svg";
import "./App.css";
import store from "./store";
import { useState } from "react";

function App() {
  const [inputCount, setCount] = useState(0);
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
            store.dispatch({
              type: "count1/plus",
              payload: { input: inputCount },
            });
          }}
        >
          +
        </button>
      </div>

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
            store.dispatch({
              type: "count1/minus",
              payload: { input: inputCount },
            });
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
          }}
        >
          -
        </button>
        {store.getState().count2}
        {/* //store.getState는 그 속의 인자를 가져올 수 있다. */}
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
