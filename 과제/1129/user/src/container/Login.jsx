import LoginComp from "../components/Login";
import store from "../store";
import { action } from "../modules/user";
import { useState } from "react";
import { userName } from "../modules/user";

const LoginContainer = () => {
  const user = store.getState().user;
  const [_, render] = useState(true);

  const login = (id, pw) => {
    store.dispatch(action.login(id, pw));

    render((state) => !state);
  };

  return <LoginComp login={login} userName={userName} />;
};

export default LoginContainer;
