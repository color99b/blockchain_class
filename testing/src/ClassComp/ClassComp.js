import React from "react";
export default class ClassComp extends React.Component {
  constructor(props) {
    super(props);

    //props란 상위 컴포넌트에서 전달하는 데이터.
    //ClassComp style = {{width:'10px'}}></ClassComp>
    //위는 속성인가 props 인가?
    //속성은 html 태그에 적는 것
    //props 는 컴포넌트 태그에 적는것.

    this.state = { count: 0 };
    //const [count, setCount] = useState(0); 위아래 같은 뜻
  }

  render() {
    return (
      <div
        onclick={function () {
          this.setState({ count: this.state.count + 1 });
        }}
      ></div>
    );
  }
}

// export default function ClassComp (){
//   return <div></div>
// }
