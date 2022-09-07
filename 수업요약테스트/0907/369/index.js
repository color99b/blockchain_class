const three = function () {
  const count = parseInt(prompt("3!6!9! 3!6!9! 숫자 몇까지?"));
  for (let i = 1; i < count + 1; i++) {
    if (
      i.toString().includes("3") ||
      `${i}`.includes("6") ||
      `${i}`.includes("9")
    ) {
      let number = `${i}`;
      //i를 문자열로 변환해준다. let number = i.toString(); << 이렇게 써도 됨
      let text = "";
      //짝을 출력하기 위해 text를 빈 문자열로 초기화한다.

      for (let j = 0; j < number.length; ++j) {
        if (!(parseInt(number[j]) % 3) && number[j] != "0") text += "짝! ";
        //각 숫자 자리가 3의 배수인지 확인하고, 0이 아닌지 확인하여 출력할 text 문자열에 "짝! "을 추가한다.
      }
      console.log(text);
    } else {
      console.log(i);
    }
  }
};

//계산할 떄는 문자 -> 숫자
//includes 사용할떄는 숫자 -> 문자.

const three1 = function () {
  const count = parseInt(prompt("3!6!9! 3!6!9! 숫자 몇까지?"));
  for (let i = 0; i < count + 1; i++) {
    let numbers = `${i}`;
    if (numbers.match(/[3,6,9]/)) {
      //match 함수 : 인자에 찾을단어가 포함된 문자를 찾으면 이를 반환함.
      console.log(
        i +
          numbers
            .split("")
            .map((item) => (!(parseInt(item) % 3) && item != "0" ? "짝! " : "")) //map 함수 : 같은 카테고리 끼리 묶어줌 수정도가능

            .join("")
      );
    } else console.log(i);
  }
};
