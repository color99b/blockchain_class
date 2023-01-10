class ParentTestClass {
  #privateValue;

  constructor(value) {
    this.#privateValue = value;
    this.value = value * 10;
  }
  get privateValue() {
    //보통은 외부에서  private 키를 가져올 때 사용한다.

    return this.#privateValue;
  }

  set privateValue(value) {
    //set 은 매개변수가 꼭 필요하다. 외부에서 재정의 못하는 변수를 수정하기 위해씀
    this.#privateValue = value;
  }

  add() {
    //class.test.js 에서 test.add() / 10번째 줄에서 사용
    return this.#privateValue + this.value;
  }
  //static은 매개변수 / 아닌건
  static add(a, b) {
    // class test.js 에서 TestClass.add(1,2 ) / 11번째 줄에서 사용
    return a + b;
  }

  s;
}

class TestClass extends ParentTestClass {
  constructor(value) {
    super(value);
    // console.log(this.#privateValue);
  }
}

module.exports = TestClass;
