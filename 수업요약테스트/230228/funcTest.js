//오버로드, 오버라이드

class Parent {
  console(data) {
    console.log("parent", data);
  }

  console(data1, data2) {
    console.log(data1, "은 data1이고", data2, "는 data2이다");
  }
}

class Child extends Parent {
  // console(data) {
  //   console.log("child", data);
  // }
  // console을 주석처리 하면 부모의 console을 가져다 사용한다.
  // console 을 주석처리 하지 않으면 오버라이딩이 되어서 함수가 변경된다.
}

const parent = new Parent();
parent.console("ㅁㄴㅇ");
const child = new Child();
child.console("띠용");
child.console("123", "456");

const wtf = (...data) => {
  data.forEach((item) => console.log(item));
  wtf(1, 2, 3, 4, "sad", "wee", "fasfas");
};
