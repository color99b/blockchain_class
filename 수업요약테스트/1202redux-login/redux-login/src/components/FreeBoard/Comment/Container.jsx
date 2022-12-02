import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../modules/comment";
import CommentComponent from "./Component";

const CommentContainer = ({ userName, boardId }) => {
  const dispatch = useDispatch();
  const list = useSelector((state) =>
    state.comment.filter((item) => item.boardId == boardId)
  );
  const add = (text) => {
    dispatch(action.add(text, userName, boardId));
  };
  const remove = (id) => {
    console.log(boardId);
    dispatch(action.remove(id));
  };

  const edit = (id, text) => {
    dispatch(action.edit(id, text));
  };
  return <CommentComponent add={add} list={list} remove={remove} edit={edit} />;
};

export default CommentContainer;
