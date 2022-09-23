function leeJH() {
  let name;
  //함수의 scope 내에서 지역변수로 name을 사용했다

  class LeeJH {
    //클래스를 생성해서 get, set 메서드를 초기화.
    get() {
      //get 메서드는 함수의 지역변수 name 을 가져올 수 있다.
      return name;
    }
    set(data) {
      //set 메서드는 받은데이터를 지역변수 name에 정의한다.
      name = data;
    }
    consoleLog() {
      // name 확인용
      console.log(name);
    }
  }

  return new LeeJH();
}
const tempJH = leeJH();

tempJH.set("이재혁");

// tempJH.get() = '정재훈'
console.log(tempJH.get());
tempJH.set("정재훈");

console.log(tempJH.get());
tempJH.name = "허재원";
console.log(tempJH.name);
console.log(tempJH.get());
//데이터를 직접적으로 터치하지 못하고, 메서드를 통해 접근할 수있게, 지역화 시켜서 굴리는것 캡슐화
