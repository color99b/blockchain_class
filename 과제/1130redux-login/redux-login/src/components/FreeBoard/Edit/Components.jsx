import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const EditComponent = ({ onClick, item }) => {
  const [title, setTitle] = useState(item.title);
  const [text, setText] = useState(item.text);

  return (
    <EditBox>
      <h1>
        <input
          type={"text"}
          placeholder={"Title"}
          value={title}
          onInput={(e) => {
            setTitle(e.target.value);
          }}
        />
      </h1>
      <h3>
        nuserName:{item.userName} - {item.createdAt}
      </h3>
      <p>
        {" "}
        <input
          type={"text"}
          placeholder={"Text"}
          value={text}
          onInput={(e) => {
            setText(e.target.value);
          }}
        />
      </p>
      <Link to={`/board/${item.id}`}>
        <button
          onClick={(e) => {
            onClick(title, text);
          }}
        >
          Edit
        </button>
      </Link>
    </EditBox>
  );
};

export default EditComponent;

const EditBox = styled.div``;
