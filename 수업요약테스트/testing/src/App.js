import logo from "./logo.svg"; //이미지를 불러온다
import "./App.css"; //css 파일을 불러온다.
import Test from "./Test.jsx";

import TempTr from "./components/TempTr";

import TempTable from "./components/TempTable";
function App() {
  const tempArr = [
    { name: "우석", age: 17, number: 1, work: "Front" },
    { name: "선주", age: 1, number: 2, work: "Front" },

    { name: "성진", age: 45, number: 3, work: "Back " },
    { name: "영준", age: 2, number: 4, work: "Back" },

    { name: "재일", age: 10, number: 5, work: "Front" },

    { name: "정규", age: 3, number: 6, work: "Back" },
  ];

  const headData = {
    name: "이름",
    age: "나이",
    number: "번호",
    work: "필살기",
  };
  const tempHead = ["name", "age", "number", "work"];
  return (
    <div className="App">
      <TempTable
        head={tempHead}
        isHead={true}
        tableData={headData}
        tableInfo={tempArr}
      />
      <TempTable
        head={tempHead}
        isHead={true}
        tableData={headData}
        tableInfo={tempArr}
      />
      <table>
        <thead>
          <TempTr isHead={true} tableData={headData} head={tempHead} />
        </thead>
        <tbody>
          {tempArr.map((item, index) => (
            <TempTr tableData={item} head={tempHead} key={index} />
          ))}
          {/* <TempTr></TempTr>
          <tr>
            <td>{tempArr[0].name}</td>
            <td>{tempArr[0].age}</td>
            <td>{tempArr[0].number}</td>
            <td>{tempArr[0].work}</td>
          </tr>
          <tr>
            <td>{tempArr[1].name}</td>
            <td>{tempArr[1].age}</td>
            <td>{tempArr[1].number}</td>
            <td>{tempArr[1].work}</td>
          </tr>
          <tr>
            <td>{tempArr[2].name}</td>
            <td>{tempArr[2].age}</td>
            <td>{tempArr[2].number}</td>
            <td>{tempArr[2].work}</td>
          </tr>
          <tr>
            <td>{tempArr[3].name}</td>
            <td>{tempArr[3].age}</td>
            <td>{tempArr[3].number}</td>
            <td>{tempArr[3].work}</td>
          </tr>
          <tr>
            <td>{tempArr[4].name}</td>
            <td>{tempArr[4].age}</td>
            <td>{tempArr[4].number}</td>
            <td>{tempArr[4].work}</td>
          </tr>
          <tr>
            <td>{tempArr[5].name}</td>
            <td>{tempArr[5].age}</td>
            <td>{tempArr[5].number}</td>
            <td>{tempArr[5].work}</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default App;
