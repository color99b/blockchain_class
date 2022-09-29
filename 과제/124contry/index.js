function solution(n) {
  var answer = "";

  if (n % 3 == 1) {
    let numOrder = parseInt(n / 3) + 1;
  } else if (n % 3 == 2) {
    let numOrder = parseInt(n / 3) + 1;
  } else if (n % 3 == 0) {
    let numOrder = parseInt(n / 3);
  } else return "오류";

  return answer;
}
