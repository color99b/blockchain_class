console.log(new Date());
console.log(new Set([1, 2, 3]));

class Block7 {
  //Block7 클래스를 선언함.

  constructor(count) {
    //생성자 : 생성자를 기준으로 객체를 생성한다.
    this.count = count;
    // 클래스의 count를 매개변수 count로 초기화
    // this 는 이 객체이다. 즉 생성되는 객체의 count 키에 전달받은 count 값을 초기화한것이다.
  }

  consoleLog() {
    //클래스의 메서드를 선언한다.
    console.log("클래스 블록 7기의" + this.count + "번째 학생입니다.");
  }
}

const block7 = new Block7(1);
// block7 클래스를 새롭게 생성
// 새성된 객체는 Block7 기준으로 하기 때문에 개발자 도구에 이름이 붙어 있다.
// 호출하면 constructor 를 호출한다.
// 매개변수는 constructor 의 매개변술 전달된다.
// 자바스크립트에 원래 클래스가 없었으나 C++, C#, java 등을 사용하는 개발자들의 요청으로 추가되었다.
block7.consoleLog();
console.log(Block7);

const block7Obj = {
  count: 1,
  consoleLog() {
    console.log("객체 블록 7기의" + this.count + "번째 학생입니다.");
  },
};

//class 는 class 명령어로 선언
// 아래는 함수형으로 클래스 선언
block7Obj.consoleLog();
console.log(block7Obj);

function Block7Func(count) {
  this.count = count;
}
Block7Func.prototype.consoleLog = function () {
  console.log("객체 블록 7기의" + this.count + "번째 학생입니다.");
};

Block7Func.prototype.consoleLog1 = () => {
  console.log(this);
  console.log(this.count);
};

window.count = 5;
// 화살표 함수의 this 는 root (window) 이고 다른 함수는 this 를 가져올 수있 다.

const block7Func = new Block7Func(2);
block7Func.consoleLog();
block7Func.consoleLog1();

class Student extends Block7 {
  //extends 를 사용하여 block7 을 상속받아 student 를 생성한다.
  constructor(name, count) {
    super(count);
    // super : 부모의 생성자. (block 7의 생성자) block7의 constructor 를 count를 매개변수로 호출한다.
    this.name = name;
  }
  consoleLog() {
    console.log("이름은 " + this.name + " 입니다.");
    super.consoleLog(); //부모의 콘솔로그를
  }
}
const kjk = new Student("김정규", 1);
kjk.consoleLog();
console.log(kjk);
console.log(block7Func);

//class 를 생성하면 그메모리 만큼 차지하게 되고, 자동으로 지워지지않아 사용자가 직접제거해야함
// class 는 리액트에선 쓰겠지만 바닐라 js에선 무거워지기만한다.
