const arr = [1, 5, 3, 6, 8, 45, 11];
arr.sort((a, b) => {
  return -1;
});
// console.log(arr);

const str = ["aaa", "aac", "aab"];

console.log(str[2] < str[1]);

str.sort((a, b) => a - b);
// str.sort((a, b) => (a > b ? 1 : -1));
// console.log(str);
