import { connect } from "react-redux";
import store from "../../../modules/store";
import InfoComponent from "./Component";
import { action } from "../../../modules/userInfo";
import axios from "axios";

const InfoContainer = ({ userName }) => {
  console.log(userName);
  const onClick = () => {
    store.dispatch(action.logout());
  };
  return <InfoComponent userName={userName} onClick={onClick} />;
};

const mapStateToProps = (state, props) => {
  console.log(state);
  return {
    userName: state.userinfo.userName,
  };
};

export default connect(mapStateToProps)(InfoContainer);
