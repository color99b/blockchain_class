import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  let num = 0;
  const [color, setColor] = useState(0);

  const increase = () => {
    num += 1;
    console.log(num);
  };
  return (
    <div className="App" onClick={increase}>
      <ChildFunc text="string" num={num} color={color} setColor={setColor} />
      <ChildComp text="string" num={num} color={color} />
    </div>
  );
}

export default App;

class ChildComp extends React.Component {
  constructor(props) {
    //보통은 읽기전용으로 쓴다.
    super(props);
    // 클래스형 컴포넌트에서는 constructor에서 매개변수로 받아
    // 상속부모 클래스의 constructor를 호출한다.
  }
  render() {
    return (
      <div style={{ color: "#" + this.props.color.toString(16) }}>
        {this.props.num}
      </div>
    );
  }
}

function ChildFunc(props) {
  //함수형컴포넌트에서는 매개변수로 바로 받는다
  // {}를 사용하여구조분해할당을 할 수 있다.
  const changeColor = () => {
    console.log(props.color);
    props.setColor(props.color + 100);
  };

  return <div onClick={changeColor}>{props.num}</div>;
}
