import { useState } from "react";

function Title(props) {
  console.log(props);
  let count = 0;
  const [count1, setCount1] = useState(0);
  const tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div>
        {count} {count1}
        {props.children}
        {/* //props.children은 상위 컴포넌트에서 해당 컴포넌트의 자식으로 설정된 값. */}
        {/* console.log(children); */}
        <button onClick={() => console.log(++count)}>{"count"}</button>
        <button
          onClick={() => {
            console.log(count1);
            setCount1(count1 + 1);
          }}
        >
          {"count1"}
        </button>
        <ul>
          {tempArr.map((item, index) => {
            return <li key={`test-${index}`}>{item}</li>;
          })}
        </ul>
      </div>
    </>
    //빈 태그가 가능하다.
  );
}

export default Title;

// component란 여러 개의 함수들을 모아 하나의 특정한 기능을 수행할 수 있도록
// 구성한 작은 기능적 단위

// React는 view를 위한 라이브러리 >> front end 에 보여주기 위함

// 기능은 div 등등의 element 구조로 많이 나뉘어진다.

//html 문법내에 js변수 함수 등등을 사용할 경우 {} 로 묶어준다.

//HTML 태그의 형제방식으로 return하지 못한다. 하나로 구조를 묶어서 return 해야함.
