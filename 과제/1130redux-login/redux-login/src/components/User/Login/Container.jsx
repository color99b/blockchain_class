import LoginComponent from "./Component";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { action } from "../../../modules/userInfo";
import store from "../../../modules/store";
import { useEffect } from "react";
const LoginContainer = ({ userName }) => {
  const navigate = useNavigate();
  const onClick = (userId, userPw) => {
    store.dispatch(action.login(userId, userPw, store.getState().userDB));
  };

  useEffect(() => {
    if (userName) navigate("/");
  }, [userName]);

  return <LoginComponent onClick={onClick} />;
};
const mapStateToProps = (state, props) => {
  return {
    userName: state.userinfo.userName,
  };
};

export default connect(mapStateToProps)(LoginContainer);
