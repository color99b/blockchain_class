const TestClass = require("./class");

describe("Class Test", () => {
  it("private test", () => {
    const test = new TestClass(5);
    expect(typeof test).toBe("object");

    //new로 객체를 만들지 않고도 Class. 으로 가져올 수 있다
    const temp = "#privateValue";
    test[temp] = 10;
    expect(test.value).toBe(50);
    expect(test.add()).toBe(55);
    expect(TestClass.add(1, 2)).toBe(3);
    test.value = 100;
    expect(test.value).toBe(100);
    //test.value === test["value"] 접근법이 다를뿐 접근하는건 동일
    expect(test["#privateValue"]).toBe(10);
    //위 코드는 이름만 똑같은 새로운 변수를 초기화해서 쓰는거고
    //아래 코드는 직접 넣어주는 코드
    expect(test.privateValue).toBe(5);
    // test["#privateValue"] ! == test.#privateValue

    test.privateValue = 200; //set 사용 (200)이 아니라 =200이다.
    expect(test.privateValue).toBe(200);
  });
});
