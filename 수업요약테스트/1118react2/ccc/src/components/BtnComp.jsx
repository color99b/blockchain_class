import React from "react";
import styled from "styled-components";
export default class BtnComp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NumPad
        className={this.props.className}
        onClick={() => {
          this.props.onClick(+this.props.item);
        }}
      >
        {this.props.item}
        <div>
          <a>asd</a>
        </div>
        <div></div>
        <a>asd</a>
      </NumPad>
    );
  }
}
const NumPad = styled.div`
  width: 100px;
  height: 100px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  div {
    width: 10px;
    height: 10px;
    background-color: red;
    &:nth-child(2) {
      background-color: blue;
    }
    a {
      color: green;
    }
  }
  &:nth-child(2n) {
    background-color: lightgray;
  }
`;
//& -> 현재 선택자
// div{ a{ }} 라고 쓰면 div 속 a 한테만 적용됨
