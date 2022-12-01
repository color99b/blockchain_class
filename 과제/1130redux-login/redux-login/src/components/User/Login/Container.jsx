import LoginComponent from "./Component";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { action } from "../../../modules/userInfo";
import store from "../../../modules/store";
import axios from "axios";

import { useEffect } from "react";
const LoginContainer = ({ userName }) => {
  const navigate = useNavigate();
  const onClick = (userId, userPw) => {
    store.dispatch(action.login(userId, userPw, store.getState().userDB));
    axios.post("http://localhost:8080/api/user/login", {
      userId,
      userPw,
      userName,
    });
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
