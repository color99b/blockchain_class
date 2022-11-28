import { Provider } from "react-redux";
import { store } from "./store/index.js";

// const reducer = (state, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case "plus":
//       return { test: state.test + "1" };
//     //return 된 값은 state에 그대로 정의된다.
//     default:
//       return state;
//   }
// };

function App() {
  return (
    <Provider store={store}>
      {/* Redux를 사용하기위해 Root 컴포넌트로 전체를 감싸준다.
      기존의 Root 컴포넌트는 provider의 자식 컴포넌트가 된다.
      Provider의 props로 store를 전달한다.

      */}
      <div>
        <button
          onClick={() => {
            store.dispatch({ type: "plus", payload: {} });
          }}
        >
          +
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            store.dispatch({ type: "dPlus", payload: {} });
          }}
        >
          ++
        </button>
      </div>
    </Provider>
  );
}

export default App;
