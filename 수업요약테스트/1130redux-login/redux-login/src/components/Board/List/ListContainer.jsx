import ListComponent from "./ListComponent";
import { connect } from "react-redux";

const ListContainer = ({ list }) => {
  console.log(list);

  return <ListComponent />;
};

const mapStateToProps = (state, props) => {
  return {
    userName: state.userinfo.userName,
    list: state.newBoard,
  };
};

export default connect(mapStateToProps)(ListContainer);
