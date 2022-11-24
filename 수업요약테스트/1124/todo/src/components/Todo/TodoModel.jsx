import styled from "styled-components";
import { STATUS, TodoBtn } from "../setting";
import { Link, useLocation } from "react-router-dom";
import { STATUSLIST } from "../setting";
import { useState } from "react";

// import setList from "../Todo";
export default function TodoModel({ setList, func }) {
  const index = useLocation().state?.index;
  const item = useLocation().state?.item;
  const [taskName, setTaskName] = useState(item ? item.taskName : "");
  const [status, setStatus] = useState(item ? item.status : STATUS.Todo);

  return (
    <AddBox>
      <AddInnerBox>
        <div>
          <input
            type="text"
            placeholder="Task Name"
            value={taskName}
            //setTaskName으로 dom 상에서는 바뀌는데 실제로 우리가
            //눈으로 보는 value도 맞춰주려고 taskname으로 한것.
            // setTaskName 에 slice (0,10) 걸어버리면
            /// value={taskName} 이 있으면 10자까지만 입력, 없으면
            // dom은 10글자, 그래픽에는 추가 입력가능
            onInput={(e) => {
              setTaskName(e.target.value);
              console.log({ taskName });
            }}
          />
        </div>
        <div>
          {STATUSLIST.map((item, index) => (
            <TodoBtn
              className={
                STATUSLIST[index].toLowerCase().replace(" ", "-") +
                (status === index ? " on" : "")
              }
              onClick={() => {
                setStatus(index);
              }}
              key={`TodoBtn-${index}`}
            >
              {item}
            </TodoBtn>
          ))}
        </div>

        <div>
          <Link to={"/"}>
            <TodoBtn
              onClick={() => {
                if (func === "Add")
                  setList((state) => [...state, { taskName, status }]);
                else if (func === "Edit")
                  setList((list) => {
                    const before = list.slice(0, index);
                    const after = list.slice(index + 1);
                    return [...before, { taskName, status }, ...after];
                  });
              }}
            >
              {func}
            </TodoBtn>
          </Link>
          <Link to={"/"}>
            <TodoBtn>Cancel</TodoBtn>
          </Link>
        </div>
      </AddInnerBox>
    </AddBox>
  );
}

const AddBox = styled.div`
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

const AddInnerBox = styled.div`
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
