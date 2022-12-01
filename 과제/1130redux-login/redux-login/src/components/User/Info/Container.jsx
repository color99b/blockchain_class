import { connect } from "react-redux";
import store from "../../../modules/store";
import InfoComponent from "./Component";
import { action } from "../../../modules/userInfo";
import axios from "axios";

const InfoContainer = ({ userName, userId }) => {
  console.log(userName);
  const onClick = () => {
    store.dispatch(action.logout());
    axios.post("http://localhost:8080/api/user/logout", { userId });
  };
  return <InfoComponent userName={userName} onClick={onClick} />;
};

const mapStateToProps = (state, props) => {
  console.log(state);
  return {
    userName: state.userinfo.userName,
    userId: state.userinfo.userId,
  };
};

export default connect(mapStateToProps)(InfoContainer);
