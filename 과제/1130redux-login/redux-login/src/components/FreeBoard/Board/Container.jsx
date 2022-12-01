import BoardComponent from "./Components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { action } from "../../../modules/board";

const BoardContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(useLocation());
  //useParams의 결과는 {id: ***} 으로 나온다.

  const list = useSelector((state) =>
    state.board.find((list) => list.id == id)
  );
  const userName = useSelector((state) => state.userinfo.userName);
  const remove = () => {
    dispatch(action.remove(list.id));
    navigate("/");
  };

  return (
    <BoardComponent
      list={list}
      remove={remove}
      isCreator={userName == list.userName}
    />
  );
};

export default BoardContainer;
