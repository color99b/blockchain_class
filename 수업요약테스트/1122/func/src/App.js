import "./App.css";
import { useState } from "react";
//함수형 컴포넌트는 생명주기가 약간 다르다
//함수형 컴포넌트는 mount, update 시에 함수 자체를 다시 호출한다.
// 클래스형 컴포넌트의 state, lifecycle 메서드들을 사용하듯이 구현을 하려면
//hook 메서드들을 사용해야한다.
import List from "./components/List";
// import ComponentDidMount from "./components/ComponentDidMount";
// import ComponentDidUpdate from "./components/ComponentDidUpdate";
// import componentWillUnmount from "./components/ComponentWillUnmount";
import EffectTest from "./components/EffectTest";
function App() {
  console.log("app");
  let num1 = 0;
  const [num, setNum] = useState(0);
  const [name, setName] = useState("");
  const increase = () => {
    num1 = num1 + 1;
    setNum(num + 1);
    console.log(num1);
  };
  return (
    <div className="App">
      <div onClick={increase}>{num}</div>
      <div>
        <List />
        <EffectTest />
      </div>
    </div>
  );
}

export default App;
