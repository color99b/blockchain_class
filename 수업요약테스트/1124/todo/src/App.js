import { useState } from "react";
import styled from "styled-components";
//default 는 파일 하나당 하나만 가능하다.
// default 를 쓰지 않으면 {}를 사용해 구조분해할당 형식으로 가져와야한다.
// export는 여러개를 내보낼 수 있다.
import Todo from "./components/Todo";
import UserBox from "./components/UserBox";
function App() {
  // const [user, setUser] = useState(""); //오늘의 과제
  return (
    <AppBox>
      <UserBox />
      <Todo />
    </AppBox>
  );
}

export default App;

const AppBox = styled.div`
  max-width: 1300px;
  margin: auto;

  &.test {
    height: 100px;
    background-color: lightgray;
  }
  @media only screen and (max-width: 1400px) {
    max-width: 1000px;
  }

  @media only screen and (max-width: 1100px) {
    max-width: 600px;
  }

  @media only screen and (max-width: 700px) {
    max-width: 300px;
  }
`;
