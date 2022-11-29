import RegistComp from "../components/RegistContainer";
import store from "../store";
import { action } from "../modules/user";
import { useState } from "react";
const RegistContainer = () => {
  const user = store.getState().user;
  const [_, render] = useState(true);

  const logout = () => {
    store.dispatch(action.logout);
    render((state) => !state);
  };

  const regist = (id, pw, name) => {
    store.dispatch(action.regist(id, pw, name));
    render((state) => !state);
  };

  return <RegistComp user={user} logout={logout} regist={regist} />;
};

export default RegistContainer;
