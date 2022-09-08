//정규표현식
const reg1 = /aa/;

const reg2 = new RegExp("aa");
//규칙을 가진 문자열을 찾기 위해 사용한다.
const tempReg = /[3,6,9]/;
//[] 내부 중의 하나 -> 3또는 6또는 9
const tempReg1 = /[0~9]/;
//0부터 9다
const koeranReg = /가~힣/;
// const inputEmail = prompt("이메일을 입력하세요");

let emailReg = /\w*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
// x* 은 횟수와 상관없이 들어가는 문자 <= x를 몇 번이고 넣을 것을 찾는다.

//^x => x로 시작한다.
// x? => x가 없거나 딱 한 번 들어간다.
// \w => 문자나 숫자다.
// \s => 공백.(띄어쓰기 , 탭, 줄바꿈 등등)
// {} => 개수다. 몇개인가.
// 정규표현식 뒤에 붙는 문자들(플래그) => ex)i
// i는 대소문자무시, g는 중복가능
// x$ => x로 끝난다.

// console.log(inputEmail.match(emailReg));
console.log("sadfsadfsadfsadf".replace("fs", "")); //첫번째로 만나는 fs 문자열을 "" 빈 문자열로 바꾼다
console.log("sadfsadfsadfsadf".replace(/fs/g, "")); //fs정규표현식인데 g가 붙어서 중복된 문자를 전부 선택한다.
