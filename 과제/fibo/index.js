function solution(n) {
  var answer = 0;
  let s0 = 0;
  let s1 = 1;
  for (let i = 1; i < n; i++) {
    answer = s0 + s1;
    s0 = s1 % 1234567;
    s1 = answer % 1234567;
  }

  return answer;
}
