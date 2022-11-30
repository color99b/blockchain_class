import styled from "styled-components";
import AddContainer from "./Add/AddContainer";
import ListContainer from "./List/ListContainer";

const BoardComponent = () => {
  return (
    <Board>
      <AddContainer />
      {/* <ListContainer /> */}
    </Board>
  );
};

export default BoardComponent;

const Board = styled.div`
  border: 1px solid black;
  padding: 15px;
`;
