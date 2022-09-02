const str = "abcDeFgHGIKlmn";
console.log(str.indexOf("D"));
//매개변수로 전달된 텍스트가 어디있나  ***.indexOf(텍스트)
console.log(str.indexOf("cD"));
console.log(str.indexOf("cDY"));
// 전달된 텍스트가 내용에 없을 시 -1을 리턴
console.log(str.length);
console.log(str.slice(1, 3));
//짜르기 1번 시작점 앞에서 짜르고, 3번시삭점뒤에서 짤라서 2,3번째 배열속 요소들이 골라짐
console.log(str.split(/D/));
// 매개변수로 전달된 정규표현식(어려움 ) - D에서 자르고 앞뒤로 나누고 D를 갖다 버리는 결과가나옴
//정규표현식은 하루종일 공부해야할 정도로 많음.
console.log(str.split("")); //하나하나 다 분해한다.

console.log(str.replace(/D/, "킥"));
//첫번째 매개변수로 정규표현식을 전달하고, 두번째 매개변수로 바꾸고 싶은 텍스트를 전달.
//대문자 D가 빠지고 킥이 들어감
console.log(str.toLowerCase()); //전부 소문자로
console.log(str.toUpperCase()); // 전부 대문자로
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
