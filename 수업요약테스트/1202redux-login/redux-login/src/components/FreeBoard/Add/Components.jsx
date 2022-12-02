import styled from "styled-components";
import { useState } from "react";

const AddComponent = ({ onClick }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  // 제목 내용
  return (
    <AddBox>
      {" "}
      <input
        type={"text"}
        placeholder={"Title"}
        onInput={(e) => {
          setTitle(e.target.value);
        }}
      />{" "}
      <textarea
        placeholder={"Text"}
        onInput={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onClick(title, text);
        }}
      >
        Add Board
      </button>
    </AddBox>
  );
};

export default AddComponent;

const AddBox = styled.div``;
