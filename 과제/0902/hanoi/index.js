let num1 = prompt("asd");
let num = parseInt(num1);
let count = 0;

function hanoi(num) {
  if (num == 1) count++;
  else count = 2 * hanoi(num - 1) + 1;

  return count;
}

console.log(hanoi(num));
