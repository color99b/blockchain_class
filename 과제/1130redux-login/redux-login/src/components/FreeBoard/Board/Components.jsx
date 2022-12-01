import styled from "styled-components";
import { Link } from "react-router-dom";

const BoardComponent = ({ list, remove, isCreator }) => {
  return (
    <BoardBox>
      <h1>{list.title}</h1>
      <h3>
        nuserName: {list.userName} - {list.createdAt}
      </h3>
      <p>{list.text}</p>
      {!isCreator || (
        <span>
          <Link to={`/edit/${list.id}`}>
            <button>EDIT</button>
          </Link>

          <button onClick={() => remove()}>Delete</button>
        </span>
      )}
    </BoardBox>
  );
};

export default BoardComponent;

const BoardBox = styled.div``;
