import { Link, Routes, Route } from "react-router-dom";
import { TodoBtn } from "../setting";
import styled from "styled-components";
import List from "./List";

import TodoModel from "./TodoModel";
import { useState } from "react";
//export 시 default 를쓰지 않으면 {}를 사용해  구조분해할당 형식으로
//가져와야한다.
export default function Todo() {
  const [list, setList] = useState([
    {
      taskName: "실험용",
      status: "0",
    },

    {
      taskName: "ㄱㅇㅈ",
      status: "1",
    },

    {
      taskName: "ㅇㅈ",
      status: "2",
    },
  ]);
  return (
    <div>
      <h1>Todo List</h1>
      <AddBtnBox>
        <Link to={"add"}>
          <TodoBtn className="sky">Add Task</TodoBtn>
        </Link>
      </AddBtnBox>
      <List list={list} setList={setList} />
      <Routes>
        <Route
          path={"add"}
          element={<TodoModel setList={setList} func={"Add"} />}
        />
        <Route
          path={"edit"}
          element={<TodoModel setList={setList} func={"Edit"} />}
        />
      </Routes>
    </div>
  );
}

const AddBtnBox = styled.div`
  text-align: right;
`;
