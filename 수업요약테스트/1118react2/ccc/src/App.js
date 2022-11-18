// import logo from "./logo.svg";
// import "./App.css";
// import ClassComp from "./components/ClassComp";
// import React, { useState } from "react";
// function App() {
//   const [isMount, setMount] = useState(true);
//   function change() {
//     setMount(!isMount);
//   }
//   const [count, setCount] = useState(0);
//   return (
//     <div
//       style={{
//         width: "500px",
//         height: "500px",
//         backgroundColor: "black",
//         color: "white",
//       }}
//       className="App"
//       onClick={() => {
//         change();
//       }}
//     >
//       {isMount ? <ClassComp count={count} setCount={setCount} /> : <></>}
//     </div>
//   );
// }
import React from "react";
import "./App.css";
import BtnComp from "./components/BtnComp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNum: undefined,
      secondNum: undefined,
      resultNum: undefined,
    };
  }

  componentDidUpdate() {
    console.log(this.state);
  }
  componentDidUpdate() {
    console.log(this.state);
  }

  selNum(num) {
    if (this.state.firstNum == undefined) {
      this.setState({ ...this.state, firstNum: num });
    } else if (this.state.secondNum == undefined) {
      this.setState({ ...this.state, secondNum: num });
    }
  }

  render() {
    //랜더가 클래스형 컴포넌트의 필수이다. virtual dom 에 그려지는 html구조
    //함수형 컴포넌트의 return 같은 역할.
    //render 의 return 밖에 setState 를 하면 렌더링 하면서 상태 바뀌고 또 렌더링하는
    //무한 반복이 나타난다.
    return (
      <div className="calculator">
        <div className="resultDisplay"></div>
        <div className="row">
          <BtnComp
            item="7"
            className="num-pad"
            onClick={this.selNum.bind(this)}
          />
          <BtnComp
            item="8"
            className="num-pad"
            onClick={this.selNum.bind(this)}
          />
          <BtnComp
            item="9"
            className="num-pad"
            onClick={this.selNum.bind(this)}
          />
          <BtnComp
            item="+"
            className="num-pad"
            onClick={function (e) {
              if (this.state.firstNum && this.state.secondNum) {
                this.setState({
                  ...this.state,
                  resultNum: this.state.firstNum + this.state.secondNum,
                  firstNum: undefined,
                  secondNum: undefined,
                });
              }
            }.bind(this)}
          />
        </div>

        <div className="row">
          <BtnComp
            item="4"
            className="num-pad"
            onClick={this.selNum.bind(this)}
          />
          <BtnComp
            item="5"
            className="num-pad"
            onClick={this.selNum.bind(this)}
          />
          <BtnComp
            item="6"
            className="num-pad"
            onClick={this.selNum.bind(this)}
          />
          <BtnComp
            item="/"
            className="num-pad"
            onClick={function (e) {
              let result;
              if (this.state.firstNum && this.state.secondNum) {
                if (this.state.firstNum > this.state.secondNum) {
                  result = this.state.firstNum / this.state.secondNum;
                } else {
                  result = this.state.secondNum / this.state.firstNum;
                }

                this.setState({
                  ...this.state,
                  resultNum: result,
                  firstNum: undefined,
                  secondNum: undefined,
                });
              }
            }.bind(this)}
          />
        </div>

        <div className="row">
          <BtnComp
            item="1"
            className="num-pad"
            onClick={this.selNum.bind(this)}
          />
          <BtnComp
            item="2"
            className="num-pad"
            onClick={this.selNum.bind(this)}
          />
          <BtnComp
            item="3"
            className="num-pad"
            onClick={this.selNum.bind(this)}
          />
          <BtnComp
            item="*"
            className="num-pad"
            onClick={function (e) {
              if (this.state.firstNum && this.state.secondNum) {
                this.setState({
                  ...this.state,
                  resultNum: this.state.firstNum * this.state.secondNum,
                  firstNum: undefined,
                  secondNum: undefined,
                });
              }
            }.bind(this)}
          />
        </div>

        <div className="row">
          <BtnComp item="야호" className="num-pad" />
          <BtnComp
            item="0"
            className="num-pad"
            onClick={function (e) {
              if (this.state.firstNum == undefined) {
                this.setState({ ...this.state, firstNum: 0 });
              } else if (this.state.secondNum == undefined) {
                this.setState({ ...this.state, secondNum: 0 });
              }
            }.bind(this)}
          />
          <BtnComp
            item="-"
            className="num-pad"
            onClick={function (e) {
              let result;
              if (this.state.firstNum && this.state.secondNum) {
                if (this.state.firstNum > this.state.secondNum) {
                  result = this.state.firstNum - this.state.secondNum;
                } else {
                  result = this.state.secondNum - this.state.firstNum;
                }

                this.setState({
                  ...this.state,
                  resultNum: result,
                  firstNum: undefined,
                  secondNum: undefined,
                });
                // setState문이 실행되어서 마무리되어 undefined가 들어가기전에
                // resultNum 에 더해지는것이 먼저 불러지기 때문에 undefined 순서는 상관없음
              }
            }.bind(this)}
          />
          <BtnComp
            item="="
            className="num-pad"
            onClick={function (e) {
              if (this.state.resultNum != undefined) {
                document.getElementsByClassName("resultDisplay")[0].innerHTML =
                  this.state.resultNum;
              }
            }.bind(this)}
            //bind는 함수 내에서의 this가 뭔지 알려주는것이다.
            //위에서 this 는 app을 뜻한다.
          />
        </div>
      </div>
    );
  }
}

export default App;
