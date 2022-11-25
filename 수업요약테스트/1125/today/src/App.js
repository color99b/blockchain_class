import logo from "./logo.svg";
import "./App.css";
import PropsTest from "./components/PropsTest";
import ContextTest from "./components/ContextTest";
import ReducerTest2 from "./components/ReducerTest2";

import Office from "./components/Office";

function App() {
  return (
    <div>
      <ReducerTest2></ReducerTest2>

      {/* <ReducerTest>
        <ContextTest />
        <PropsTest />

        <Office />
      </ReducerTest> */}
    </div>
  );
}

export default App;
