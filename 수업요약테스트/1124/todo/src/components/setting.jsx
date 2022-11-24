import styled from "styled-components";

export const STATUS = {
  Todo: 0,
  InProgress: 1,
  Complete: 2,
};
// 전부 대문자인 변수명 : 고정된 설정값 -> 개발자들끼리의 규칙
export const STATUSLIST = ["ToDo", "In Progress", "Complete"];
export const TodoBtn = styled.div`
  border: 1px solid black;
  display: inline-block;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  color: black;

  &.todo {
    color: gray;
    border-color: gray;
  }
  &.in-progress {
    color: orange;
    border-color: orange;
  }
  &.complete {
    color: green;
    border-color: green;
  }
  &.sky {
    color: #0dcaf0;
    border-color: #0dcaf0;
  }

  &.on {
    color: black;
    &.todo {
      background-color: gray;
    }
    &.in-progress {
      background-color: orange;
    }
    &.complete {
      background-color: green;
    }
  }
`;
