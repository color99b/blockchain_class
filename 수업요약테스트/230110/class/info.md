# class란

-객체(object)를 만들기 위한 틀
-class ClassName{} 형식으로 정의하고, new ClassName() 형식으로 객체를 생성한다.

- 같은 형식의 객체를 쉽게 만들기 위해 사용한다
- keyword
  - extends
    - 상속할 때 사용한다. 클래스를 생성할 때 사용하게 된다.
    - class A extends B << B를 기초로 A를 정의. A는 B에 있는 key, value, method 를 모두 갖고있다.
  - public
    - 생성한 객체 기준에서 외부에서 접근 가능한 키
    - 따로 설정할 필요 없이 this.abcd 형식으로 구현한다.
  - private
    - 클래스 내부에서만 접근 가능한 키
    - 정의할 때 앞에 #을 붙인다.
      -this.#abcd 로 클래스 내에서 사용이 가능하다 obj.#abcd로는 사용불가능
  - protected
    - 클래스 내부에서만 접근 가능한 키, 상속이 가능하다.
    - 정의할 때 앞에 \_를 붙인다.
    - 단, js에서 소용이 없었다. << test 결과 public과 똑같이 사용가능
      외부에서 사용할 수 없어야하지만 js에서는 사용이 가능했다.
  - static
    - 클래스 자체로 사용 가능한 함수, 키 정의
    - 기존에 obj.add 와 같이 사용했던 방식이 아닌 ClassName.add 처럼 클래스 자체에 .을 붙여서 호출한다.
    -
