import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  initialize as userInfoIni,
  reducer as userInfoReducer,
} from "./userInfo";
import { initialize as userDBIni, reducer as userDBReducer } from "./userDB";

const store = createStore(
  combineReducers({ userinfo: userInfoReducer, userDB: userDBReducer }),
  { userinfo: userInfoIni, ...userDBIni },
  composeWithDevTools()
);

export default store;
