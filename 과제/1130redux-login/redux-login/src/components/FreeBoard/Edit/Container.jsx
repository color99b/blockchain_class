import EditComponent from "./Components";
import { useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { action } from "../../../modules/board";
const EditContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams(useLocation());
  const item = useSelector((state) =>
    state.board.find((item) => item.id == id)
  );
  const onClick = (title, text) => {
    dispatch(action.edit(id, title, text));
  };
  return <EditComponent item={item} onClick={onClick} />;
};

export default EditContainer;
