const toDoHeadList = [
  { type: "checkbox", name: "여부" },
  { type: "doit", name: "할일" },
  { type: "date", name: "마감날짜" },
  { type: "time", name: "시간" },
];
const btn = document.getElementById("btn");
const listElem = document.getElementById("table");
const delItem = document.getElementById("deleteItem");
const insItem = document.getElementById("insertItem");
let toDoList = [];
let count = 0;
let radioCheck = 0;

function createtoDoList(doit, date, time) {
  toDoList.push({
    doit,
    date,
    time,
  });
}

function addList() {
  const doitlist = document.getElementById("text_input").value;
  const untildate = document.getElementById("date_input").value;
  const untiltime = document.getElementById("time_input").value;
  count++;
  let tempArr =
    `<tr id=asd${count}><td>` +
    "<input type='checkbox' id='checkBox'/>" +
    "</td><td style width='30%'>" +
    doitlist +
    "</td><td>" +
    untildate +
    "</td><td>" +
    untiltime +
    "</td></tr>";
  listElem.innerHTML += tempArr;
}

function deleteList() {
  const element = document.getElementById(`asd${count}`);
  element.innerHTML = "";
  count--;
}

btn.onclick = () => {
  addList();
};

console.log(toDoList);

delItem.onclick = () => {
  deleteList();
};

inser;
