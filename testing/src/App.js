import logo from "./logo.svg"; //이미지를 불러온다
import "./App.css"; //css 파일을 불러온다.
import Test from "./Test.jsx";

function App() {
  //파스칼 표기법을 사용한다 << component이다.
  // 한 컴포넌트안에 제일 큰태그 하나만 딱 들어가는듯함.
  return (
    <div className="App">
      <Test>안녕하세요</Test>
      {/* // react에서는 class가 아닌 className 이라고 한다. */}
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
