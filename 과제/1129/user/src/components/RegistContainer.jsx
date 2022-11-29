import styled from "styled-components";
import { useState } from "react";

const RegistComp = ({ user = 0, login, logout, regist }) => {
  const [userId, setUserId] = useState(0);
  const [userPw, setUserPw] = useState(0);
  const [userName, setUserName] = useState(0);

  return (
    <Main>
      <div>
        <h3>회원가입</h3>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          regist(userId, userPw, userName);
        }}
      >
        <Vbox>
          ID:
          <input
            type={"text"}
            id={"id"}
            onInput={(e) => {
              setUserId(e.target.value);
            }}
          />
          PW:
          <input
            type={"password"}
            id={"pw"}
            onInput={(e) => {
              setUserPw(e.target.value);
            }}
          />
          name:
          <input
            type={"text"}
            id={"name"}
            onInput={(e) => {
              setUserName(e.target.value);
            }}
          />
        </Vbox>
        <Fbox>
          <Btn
          // onClick={(e) => {
          //   e.preventDefault();
          // }}
          >
            가입
          </Btn>
          <Btn
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            취소
          </Btn>
        </Fbox>
      </form>
    </Main>
  );
};

export default RegistComp;

const Fbox = styled.div`
  display: flex;
`;

const Vbox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  padding: 15px;
  width: 300px;
`;

const Btn = styled.button`
  width: 120px;
  height: 50px;
  background-color: beige;
  border: 1px solid black;
  border-radius: 15px;
  cursor: pointer;
`;
