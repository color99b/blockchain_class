// import logo from './logo.svg';

import "./App.css";

function testing() {
  return "함수 테스팅";
}

function increase(num) {
  num = num + 1;
  console.log(num);
}

let arrDiv = [
  <div key={0}>1</div>,
  <div key={1}>2</div>,
  <div key={2}>3</div>,
  <div key={3}>4</div>,
];

function arrFunc(arr) {
  const tempArr = [];
  // for (let i = 0; i < arr.length; ++i) {
  //   tempArr.push(<div key={i}>{arr[i]}</div>);
  // }
  arr.forEach((item, index) => {
    tempArr.push(<div key={index}>{item}</div>);
  });
  return tempArr;
}
//foreach 자체는 return 이 없고 map 은 자체 return이 있음.
function App() {
  let test = "테스팅";
  let num = 1;
  let bool = true;
  let str = "문자열";
  let arr = [1, 2, 3, 4];
  let obj = { name: "객체" };
  let nul = null;
  let und = undefined;

  //"값을 내보낸다", "값을 가져온다" 얘기할 수 있는 것들과 if, for, while의
  //차이점?
  //값을 내보낸다, 가져온다 > 변수
  // if 조건문, for while 반복문 -> 문장일 뿐이다.
  //{}는 값을 가지고 있는 친구들만 가져올 수 있다.
  return (
    <div className="App">
      <div>{num}</div>
      <div>{test}</div>
      <div>{bool}</div>
      <div>{str}</div>
      <div>{arr}</div>
      <div>{nul}</div>
      <div>{obj.name}</div>
      <div>{und}</div>
      <div>{bool ? "true" : "false"}</div>
      <div>{testing()}</div>
      <div onClick={increase}>asd</div>
      <div>{arrDiv}</div>
      <div>
        {arrFunc(arr)}
        {arr.map((item, index) => {
          return <div key={index}> {item}</div>;
        })}
      </div>
    </div>
  );
}

export default App;

class App1 extends React.Components {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this);
    return <div>{this.num}</div>;
  }
}
