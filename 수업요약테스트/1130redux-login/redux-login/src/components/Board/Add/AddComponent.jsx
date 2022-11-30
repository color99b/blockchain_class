import styled from "styled-components";
import { useState } from "react";
import store from "../../../modules/store";

const AddComponent = ({ userName, onClick, list }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <>
      <AddBoard>
        제목 :
        <input
          onInput={(e) => {
            e.preventDefault();
            setTitle(e.target.value);
          }}
          placeholder={"제목"}
        />
        내용 :
        <Area
          onInput={(e) => {
            e.preventDefault();
            setText(e.target.value);
          }}
        />
        <Btn
          onClick={(e) => {
            e.preventDefault();
            onClick(title, text);
          }}
        >
          전송
        </Btn>
      </AddBoard>
      <BoardList>
        <Fbox>
          <div className="title">제목</div>
          <div className="text">내용</div>
          <div className="name">작성자</div>
          <div className="time">시간</div>
        </Fbox>
        <Hbox>
          {list.map(function (element, index) {
            return (
              <Fbox key={index}>
                <div>{element.title}</div>
                <div>{element.text}</div>
                <div> {element.userName}</div>
                <div> {element.time}</div>
              </Fbox>
            );
          })}
        </Hbox>
      </BoardList>
    </>
  );
};

export default AddComponent;

const AddBoard = styled.div`
  border: 1px solid black;
  padding: 15px;
`;

const Fbox = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Hbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const BoardList = styled.div`
  border: 1px solid black;
  padding: 15px;
`;

const Btn = styled.button`
  border: 1px solid black;
  padding: 5px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Area = styled.textarea`
  width: 300px;
  height: 200px;
`;
