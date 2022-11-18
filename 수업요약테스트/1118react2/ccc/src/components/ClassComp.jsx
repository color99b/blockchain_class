// yarn 이란
// react 에 최적화 하기 위해 만든 패키지 매니저.ㅜ
// 설치법 : npm i -g corepack
// 터미널 파워셀에서는 사용 불가능.

import React from "react";

export default class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    //virtual dom  에 추ㅏ될 때 실행되는 함수
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    //state가 변경된 후에 실행되는 함수
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    //virtual dom에서 삭제 될 때 실행되는 함수
    console.log("componentWillUmount");
  }

  render() {
    return (
      <>
        <div
          onClick={function (e) {
            e.stopPropagation();
            // 현재 이벤트가 캡처링/버블링 단계에서 더이상 전파되지 않도록함
            // 이벤트가 상위 엘레먼트에 전달되지 않게 막아준다.
            this.props.setState({ count: this.state.count + 1 });
          }.bind(this)}
        >
          {this.state.count}
        </div>

        <div
          onClick={function (e) {
            e.stopPropagation();
            // 현재 이벤트가 캡처링/버블링 단계에서 더이상 전파되지 않도록함
            // 이벤트가 상위 엘레먼트에 전달되지 않게 막아준다.
            this.props.setCount({ count: this.props.count + 1 });
          }.bind(this)}
        >
          {this.props.count}
        </div>
      </>
    );
  }
}
