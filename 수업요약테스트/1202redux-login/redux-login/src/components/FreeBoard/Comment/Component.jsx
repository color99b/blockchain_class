import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
const CommentComponent = ({ add, list, edit, remove }) => {
  const [addText, setAddText] = useState("");

  return (
    <CommentBox>
      <CommentAddBox>
        <input
          type={"text"}
          value={addText}
          onInput={(e) => {
            setAddText(e.target.value);
          }}
          placeholder={"Comment"}
        />
        <button
          onClick={() => {
            add(addText);
          }}
        >
          Add Component
        </button>
      </CommentAddBox>
      {list.map((item, index) => (
        <CommentItemComponent
          key={`comment-${index}`}
          item={item}
          edit={edit}
          remove={remove}
        ></CommentItemComponent>
      ))}
    </CommentBox>
  );
};

export default CommentComponent;

const CommentBox = styled.div``;

const CommentAddBox = styled.div``;

const CommentItemComponent = ({ item, edit, remove }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(item.text);
  const name = useSelector((state) => state.userinfo.userName);
  let temp = false;
  if (item.userName == name) {
    temp = true;
  }
  return (
    <div>
      {isEdit ? (
        <input
          id={"editInput"}
          type={"text"}
          value={editText}
          onInput={(e) => {
            setEditText(e.target.value);
          }}
        />
      ) : (
        item.text
      )}{" "}
      - {item.userName}
      {temp ? (
        <>
          [
          <button
            onClick={() => {
              if (isEdit) {
                edit(item.id, editText);
                setIsEdit(false);
              } else {
                setIsEdit(true);
                setEditText(item.text);
              }
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              isEdit ? setIsEdit(false) : remove(item.id);
            }}
          >
            {isEdit ? "Cancel" : "Remove"}
          </button>
          ]
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
