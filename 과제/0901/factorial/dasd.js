let a = prompt("dada");

function fator(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    if (n == 1) return 1;

    result = i * fator(n - 1);
  }

  return;
}

fator(a);
console.log(fator(a));
