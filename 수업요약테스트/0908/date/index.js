const today = new Date();

console.log(today);

console.log(today.toLocaleDateString());
console.log(today.toUTCString());

console.log(today.getDate());
console.log(today.getDay()); //요일을 0부터 6으로 (일~토) 출력합니다

console.log(today.getMonth());
//날짜 관련이면 date를 기억해라

console.log(Date.now);
console.log(new Date(Date.now()));
