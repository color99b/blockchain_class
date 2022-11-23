import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/Login";
import Header from "./components/Header";
import { useState } from "react";
import Log from "./components/Log";
import In from "../../router2/src/components/Log/In";
import Out from "../../router2/src/components/Log/Out";
function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <Header />
      <Routes>
        //Router를 나누기 위해서는 Routes 컴포넌트로 묶어야한다.
        <Route path="/" element={<Home propsNum={num} />} />
        //route는 각 라우터에 대한 구현이다. path는 라우터의 주소 //element 는
        출력할 element or components
        <Route path="login" element={<LogIn />} />
        <Route path="log" element={<Log />}>
          <Route path="in" element={<In />}></Route>
          <Route path="out" element={<Out />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
