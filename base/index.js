// const oneTwoThree = [3, 2, 3];
// result = oneTwoThree.reduce((acc, cur, i) => {
//   console.log(acc, cur, i);
//   if (!(cur % 2)) acc.push(cur);
//   return acc;
// }, []);
// // 0 3 2
// // 3 2 1
// // 5 1 0
// console.log(result);

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
let result;
result = words.reduce((acc, cur, i) => {
  if (cur.includes("li")) acc.push(cur);
  return acc;
}, []);

console.log(result);
let result2;
result2 = words.filter((asd) => asd.length > 5);

console.log(result2);
console.log("외모만으론 구별 불가능");
