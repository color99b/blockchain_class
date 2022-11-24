import styled from "styled-components";
import { TodoBtn } from "../../setting";
import pencil from "./pencil.svg";
import trash from "./trash.svg";
import { Link } from "react-router-dom";
import { STATUSLIST } from "../../setting";

export default function Item({ item, index, setList }) {
  return (
    <ItemTr>
      <td>{index + 1}</td>
      <td>{item.taskName}</td>
      <td>
        <TodoBtn
          className={STATUSLIST[item.status].toLowerCase().replace(" ", "-")}
          style={{ cursor: "default" }}
        >
          {STATUSLIST[item.status]}
        </TodoBtn>
      </td>
      <td>
        <Link to={"/edit"} state={{ index, item }}>
          <TodoBtn>
            <img
              src={pencil}
              alt="/"
              style={{
                filter:
                  "invert(61%) sepia(66%) saturate(6400%) hue-rotate(165deg) brightness(100%) contrast(103%)",
              }}
            />
          </TodoBtn>
        </Link>
      </td>
      <td>
        <TodoBtn
          className="todo"
          onClick={() => {
            setList((list) => {
              const before = list.slice(0, index);
              const after = list.slice(index + 1);
              return [...before, ...after];
            });
          }}
        >
          <img
            src={trash}
            alt="/"
            style={{
              filter:
                "invert(18%) sepia(50%) saturate(7491%) hue-rotate(356deg) brightness(122%) contrast(102%)",
            }}
          />
        </TodoBtn>
      </td>
    </ItemTr>
  );
}

const ItemTr = styled.tr`
  text-align: center;
  height: 50px;
  td {
    border-bottom: 1px solid lightgray;
    img {
      width: 20px;
    }
  }
`;
