const headList = [
  { type: "number", name: "번호" },
  { type: "name", name: "이름" },
  { type: "age", name: "나이" },
  { type: "area", name: "거주지" },
  { type: "mbti", name: "MBTI" },
  { type: "bloodType", name: "혈액형" },
];
const studentsList = [];

function createstudent(name, age, area, mbti, bloodType) {
  studentsList.push({
    name,
    age,
    area,
    mbti,
    bloodType,
  });
}

createstudent("김성진", 27, "성남", "INTP", "B");
createstudent("염예나", 22, "하남", "ENFP", "B");
createstudent("정재훈", 30, "강남", "ENTP", "B");
createstudent("이가원", 27, "광진", "ISFP", "O");
createstudent("김재일", 29, "용인", "ENFP", "AB");

console.log(studentsList);

const tableheader = document.getElementById("table-header");
headList.forEach((item) => {
  tableheader.innerHTML += "<th>" + item.name + "</th>";
});

const studentListElem = document.getElementById("data-list");
studentsList.forEach((item, index) => {
  let tempStr = "<tr>";
  headList.forEach((headItem) => {
    if (headItem.type === "number") tempStr += `<th>${index + 1}</th>`;
    else tempStr += `<td>${item[headItem.type]}</td>`;
  });
  tempStr += "</tr>";
  studentListElem.innerHTML += tempStr;
});
