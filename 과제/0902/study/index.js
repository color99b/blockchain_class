const tempArr = [
  {
    name: "정재훈",
    age: 30,
    area: "대치동",
  },
  {
    name: "염예나",
    age: 22,
    area: "하남",
  },
  {
    name: "김성진",
    age: 27,
    area: "성남",
  },
];

console.log(tempArr.find((item) => item.area === "하남"));
console.log(tempArr.findIndex((item) => item.area === "하남"));
console.log(tempArr.filter((item) => item.area === "하남"));
console.log(tempArr.map((item) => item.area === "하남"));
