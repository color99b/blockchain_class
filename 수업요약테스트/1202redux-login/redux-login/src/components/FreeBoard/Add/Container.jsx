import AddComponent from "./Components";
import { useSelector, useDispatch } from "react-redux";
import { action } from "../../../modules/board";

const AddContainer = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userinfo.userName);
  //connect가 필요가 없다. (connect는 클래스형)
  const onClick = (title, text) => {
    dispatch(action.add(title, text, userName));
  };
  return !userName || <AddComponent onClick={onClick} />;
};

export default AddContainer;
