import styled from "styled-components";
import { Link } from "react-router-dom";
const ListComponent = ({ list }) => {
  console.log(list);
  return (
    <ListBox>
      <colgroup>
        <col width={"20%"} />
        <col width={"40%"} />
        <col width={"20%"} />
        <col width={"20%"} />
      </colgroup>
      <thead>
        <tr>
          <th>Index</th>
          <th>Title</th>
          {/* <th>Text</th> */}
          <th>Username</th>
          <th>createdAt</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <tr key={`tr-${index}`}>
            <td key={`id-${index}`}>{item.id}</td>
            <td key={`title-${index}`}>
              <Link to={`/board/${item.id}`}>{item.title}</Link>
            </td>
            <td key={`userName-${index}`}>{item.userName}</td>
            <td key={`createdAt-${index}`}>{item.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </ListBox>
  );
};

export default ListComponent;

const ListBox = styled.table`
  width: 100%;
  border-collapse: collapse;
  th {
    border-bottom: 1px solid black;
  }
  td {
    border-bottom: 1px dashed black;
    text-align: center;
  }
`;
