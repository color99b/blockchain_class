import styled from "styled-components";
import { useState } from "react";

//3. onclick을 컨테이너(부모컴포넌트) 에서 프롭스로 받는다.
const RegistComponent = ({ onClick }) => {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [userName, setName] = useState("");

  console.log("3.컴포넌트", onClick);
  return (
    <RegistBox>
      <input
        type={"text"}
        value={userId}
        onInput={(e) => {
          setId(e.target.value);
        }}
        placeholder={"ID"}
      />
      <input
        type={"password"}
        value={userPw}
        onInput={(e) => {
          setPw(e.target.value);
        }}
        placeholder={"PW"}
      />
      <input
        type={"text"}
        value={userName}
        onInput={(e) => {
          setName(e.target.value);
        }}
        placeholder={"Name"}
      />
      <button
        onClick={() => {
          console.log("button 온클릭");
          //4. 사용자가 regist 버튼을 클릭했을때 onclick을 호출
          onClick(userId, userPw, userName);
        }}
      >
        Regist
      </button>
    </RegistBox>
  );
};

export default RegistComponent;

const RegistBox = styled.div`
  input {
    padding: 5px;
  }
`;
