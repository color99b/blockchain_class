const headlist = [
  { type: "number", name: "번호" },
  { type: "name", name: "이름" },
  { type: "age", name: "나이" },
  { type: "area", name: "거주지" },
  { type: "mbit", name: "MBTI" },
  { type: "bloodType", name: "혈액형" },
];
const studentslist = [];
function createStudent(name, age, area, mbti, bloodType) {
  studentslist.push({
    name, //객체 정의시 객체 내에 다른 변수만을 넣으면 변수명과 변수의 값을 키와 값에 대칭하여 입력한다.
    age,
    area,
    mbti,
    bloodType,
    //name 매개변수에 정의된 값을 객체의 name 키에 대한 값으로 정의한다.
  });
}

let temp = 100;
const tempObj = {
  temp,
  //temp : temp,  윗줄과 같은 뜻이다.
};

createStudent("김성진", 27, "성남", "INTP", "B");
createStudent("염예나", 22, "하남", "ENFP", "B");
createStudent("정재훈", 30, "강남", "ENTP", "B");
createStudent("이가원", 27, "광진", "ISFP", "O");
createStudent("김재일", 29, "용인", "ENFP", "AB");

console.log(studentslist);
//객체를 볼때 abc 순으로 정렬되는데 (콘솔창에서) 이건 프로퍼티의 abc 순이다.

const tableHeaderElem = document.getElementById("table-header");

headlist.forEach((item) => {
  tableHeaderElem.innerHTML += "<th>" + item.name + "</th>";
});

const studentslistElem = document.getElementById("data-list");
studentslist.forEach((item, index) => {
  let tempStr = "<tr>";
  headlist.forEach((headItem) => {
    if (headItem.type === "number") tempStr += `<th>${index + 1}</th>`;
    else tempStr += `<td>${item[headItem.type]}</td>`;
  });

  tempStr += "</tr>";
  studentslistElem.innerHTML += tempStr;
});

// let count = 0;
// studentslistElem.innerHTML = studentslist.reduce((next, curr) => {
//   return (
//     next +
//     `<tr>${headlist.reduce((headNext, headCurr) => {
//       if (headCurr.type === "number") return headNext + `<th>${++count}</th>`;
//       else return headNext + `<td>${curr[headCurr.type]}</td>`;
//     })}`
//   );
// });
