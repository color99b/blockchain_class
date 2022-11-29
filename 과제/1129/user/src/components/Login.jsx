import { useState } from "react";
import styled from "styled-components";

const LoginComp = ({ login, userName }) => {
  const [loginId, setloginId] = useState(0);
  const [loginPw, setloginPw] = useState(0);

  return (
    <Main>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login(loginId, loginPw);
          }}
        >
          <Vbox>
            ID:
            <input
              type="text"
              onInput={(e) => {
                setloginId(e.target.value);
              }}
            />
            PW:
            <input
              type="text"
              onInput={(e) => {
                setloginPw(e.target.value);
              }}
            />
          </Vbox>
          <Btn>로그인</Btn>
        </form>
      </div>
      <div>{userName}님 어서오세요</div>
    </Main>
  );
};

export default LoginComp;

const Main = styled.div`
  padding: 15px;
  width: 300px;
`;
const Vbox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Btn = styled.button`
  width: 120px;
  height: 50px;
  background-color: beige;
  border: 1px solid black;
  border-radius: 15px;
  cursor: pointer;
`;
