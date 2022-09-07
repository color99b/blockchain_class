function odd() {
  const count = parseInt(prompt("몇까지 찍을까"));
  for (let i = 0; i <= count; i++) {
    if (i % 2) console.log(i);
    //i%2 <<--홀수일 때 1 (true), 짝수일때 0 (false)
  }
  //위 코드는 아래 코드들보다 안좋다. (반복의 회수가 다름. 위에껀 1000이면 1000번인데 아래는 /2라 500번씩)
  for (let i = 0; i < count / 2; i++) {
    console.log(i * 2 + 1);
  }
  for (let i = 1; i < count + 1; i += 2) {
    console.log(i);
  }
}

const even = function () {
  const count = parseInt(prompt("몇까지 찍을까"));
  for (let i = 0; i <= count; i++) {
    if (!(i % 2)) console.log(i);
  }
  for (let i = 0; i < (count + 1) / 2; i++) {
    console.log(i * 2);
  }

  for (let i = 0; i < count + 1; i += 2) {
    console.log(i);
  }
};

const oddeven = () => {
  const count = prompt(
    " 몇 까지 입력할까? 그리고 홀이야 짝이야 ?\n 형식은 n&홀짝"
  );

  const number = count.split("&")[0];
  const isOdd = count.split("&")[1];
  // 숫자와 홀짝이 나누어졌다.

  if (isOdd == "홀") {
    odd();
  } else {
    even();
  }
};
