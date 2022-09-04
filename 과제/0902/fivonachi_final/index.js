// // 피보나치
// // 1 1 2 3 5 8 13
// // 첫 째 항, 두번째 항은 1고정
// // 세번째 항부턴 전항 + 전전항

// let num1, num2, num3;
// let def = 1;

// let length = prompt("수열의 길이는?");
// num1 = parseInt(length);

// function fibo(num) {
//   // 1에서 걸리고 종료
//   //   if (num == 1 || num == 2) {
//   //     num3 = 1;
//   //     console.log(num3);
//   //   } else {
//   //     num3 = fibo(num - 1) + fibo(num - 2);
//   //     console.log(num3);
//   //   }
//   //   // 2에서 걸리고 종료
//   //   // 3이상일때 부터 진행
//   //   if (num == 2) return console.log("1");
//   //   if (num == 1) return;
//   //   return console.log(fibo(num - 1));
//   // }
//   // for (; num1 >= 1; num1--) {
//   //   fibo(num1);
//   if (num - 2 == 0) {
//     return;
//   } else if (num - 2 > 0) {
//     num3 = fibo(num - 1) + fibo(num - 2);
//     console.log(num3);
//   } else return;
// }

// for (; num1 >= 0; num1--) {
//   fibo(num1);
// }

// // 4입력하면
// // (3을찍고 (2를찍고 (1을 찍고 (1을찍고 종료))))
// //  fibo(4)   fibo(3)  fibo(2)     fibo(1)

// //  fibo(n+3)   fibo(n+2) fibo(n+1)  fibo(1)

// // fibo();

// //  5입력
// //  1을 디폴트잡고, 피보나치 디폴트 = 0  if (n-i ==0)
// //  1 = 1
// //  1~ 5
// //  i=1
// //  1  디폴트 = 0  if (n-i ==0)
// //  i=2
// //  1 1
// //  i= 3
// //  1 1 2
// //  i=4
// //  1 1 2 3
// //  i= 5
// // 1 1 2 3 5

let num1 = prompt("몇 번째 항인지 입력하시오");
let num = parseInt(num1);

function fibo(num) {
  if (num == 1 || num == 0) return num;

  return parseInt(fibo(num - 1)) + parseInt(fibo(num - 2));
}

console.log(fibo(num));
// 리턴에는 계산식으로 하고 아래에 콘솔로그를 적으면 계산은 잘됨.
