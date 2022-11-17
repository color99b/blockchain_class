import TempTr from "./TempTr";

function TempTable({ isHead, tableData, head, tableInfo }) {
  return (
    <table>
      <thead>
        <TempTr isHead={isHead} tableData={tableData} head={head} />
      </thead>
      <tbody>
        {tableInfo.map((item, index) => (
          <TempTr tableData={item} head={head} key={index} />
        ))}
      </tbody>
    </table>
  );
}

export default TempTable;
