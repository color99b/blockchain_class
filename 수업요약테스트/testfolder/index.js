let obj = {};
obj = { a: 1, b: 2, c: "3" };
let arr1 = [1, 2, "3", { a: 1, b: 2, c: "3" }, true, [obj.a], obj];

let shift1 = arr1.shift();

console.log(arr1);
