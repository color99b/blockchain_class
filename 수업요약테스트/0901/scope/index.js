// scope라는 것이 있습니다.
// scope 는 {} 로 묶인 것입니다.
// {}를 scope 라고 부릅니다.
// 지역을 나타낸다.
// 상위에 scope가 없이 메인 페이지는 전역scope 라고 한다.

let a = 0; //상위에 scope 가 없어서 전체적으로 모든곳에서 사용할 수 있는 변수

console.log(a);
{
  //이렇게 {} 묶인 한 곳을 지역 scope라고 한다.
  let a = 2; //전역변수 a가 있는데 여기서 지역변수 a라고 선언해줬으므로
  //전역변수 a는 더이상 이 scope 안의 a와 같은 a가 아니다.
  let b = 1; //한 scope 안에서 선언된 지역변수
  console.log(a + b);
  console.log(a);
}
console.log(a);

// console.log(b); 이 코드가 적용되면 에러가남. b가 없어서.

//scope 안에서 선언을 하면 그 안에서 어떻게 활용을 하던 scope가 끝나면 무용지물.
// ㅣ-> 스코프 안에서는 중복이름이 안되지만 하위 스코프로 가서 같은 이름을 설정해도
//       문법상 오류가 없음 -> 변수 해석이 좀 힘들어질 수 있어서 정확히 필요할때만 사용

let obj = {
  //obj는 첫항에 a, 두 번째 항에 func1, 세번째 항에 func 이 들어간 메서드이다.
  a: 1,
  func1: function () {
    console.log("이렇게도 됨");
  },
  func: (fn, sn) => {
    return fn + sn;
  },
};

obj.func1();

console.log(obj.func(1, 2));
//객체 안에 포함된 함수는 method라고 부른다.
//consle 객체안의 log method
// Math 객체 안의 random method

alert("경고!");
