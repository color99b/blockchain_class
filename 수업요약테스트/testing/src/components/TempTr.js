import TempTd from "./TempTd";

export default function TempTr({ isHead, tableData, head }) {
  //매개변수를 구조분해 할당으로 받았다.
  console.log(tableData);
  if (isHead) {
    return (
      <tr>
        {head.map((item, index) => (
          <th key={index}>{tableData[item]}</th>
        ))}
      </tr>
    );
  }
  return (
    <tr>
      {head.map((item, index) => (
        <TempTd item={tableData[item]} key={index}></TempTd>
      ))}
    </tr>
  );
}
