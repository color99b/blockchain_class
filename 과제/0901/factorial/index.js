//n! 은 n*(n-1)*(n-2)*-----1
// 전의값 -1을 곱하는식
let fn;
let result;
let n1 = prompt("숫자를 입력하세요");
console.log(n1);
result = 1;
let n = parseInt(n1);
// fn = n - 1;
// console.log(fn);

// function fac() {
//   result = fn * n;
//   fn--;
//   n--;
//   if (n == 1) {
//     console.log(result);
//   } else console.log(x);
//   return;
// }

// fac(fac());

// (n * (n - 1))(n - 2);
// result = n; //4

// function fac1(n) {
//   //3 2
//   if (n > 0) {
//     n--; // 3 2

//     result = result* fac1(n - 1); // 4*[fac1(3)= 4*fac1(2)]
//   } else if (n == 0) {
//     return alert(result);
//   } else alert("양의 정수를 입력하십시오");

//   return n;
// }

// fac1(n);

// fac1(n);
// fac(n)* fac(n-1) * fac(n-2) * 1

function fac() {
  let n2 = n;

  for (; n2 > 0; n2--) {
    result *= n2;
  }
  return alert(result);
}

fac(n);

let a = prompt("dada");

function fator(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    if (n == 1) return 1;
    else {
      result = i * fator(n - 1);
    }
  }
}

fator(a);
