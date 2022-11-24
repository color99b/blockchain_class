import styled from "styled-components";
import Input from "./Input";
import DefaultBtn from "./DefaultBtn";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp(setList) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const [nickname, setNickname] = useState("");

  return (
    <SignUpBox>
      <InnerBox>
        Id:{" "}
        <input
          kind={"text"}
          id={"id"}
          value={id}
          setList={setList}
          onInput={(e) => {
            setId(e.target.value);
          }}
        />
        pw:{" "}
        <input
          kind={"password"}
          id={"pw"}
          type={"password"}
          value={pw}
          setList={setList}
          onInput={(e) => {
            setPw(e.target.value);
          }}
        />
        nickname:{" "}
        <input
          kind={"text"}
          id={"nickname"}
          value={nickname}
          setList={setList}
          onInput={(e) => {
            setNickname(e.target.value);
            console.log({ nickname });
          }}
        />
        <div>
          <Link to={`../${id}`}>
            <DefaultBtn
              text={"가입"}
              onClick={() => {
                setList((state) => [...state, { id, pw, nickname }]);
                console.log(setList);
              }}
            />
          </Link>
          <Link to={"../"}>
            <DefaultBtn text={"취소"} />
          </Link>
        </div>
      </InnerBox>
    </SignUpBox>
  );
}

export default SignUp;

const SignUpBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 50%;
  input {
    width: 100%;
    padding: 5px 10px;
  }
  & > div {
    margin: 10px 0;
    display: flex;
    justify-content: space-evenly;

    &:last-child {
      justify-content: space-between;
    }
  }
`;
