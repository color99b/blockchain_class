import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  initialize as userInfoIni,
  reducer as userInfoReducer,
} from "./userInfo";
import { initialize as userDBIni, reducer as userDBReducer } from "./userDB";
import { initialize as boardIni, reducer as boardReducer } from "./board";
const store = createStore(
  combineReducers({
    userinfo: userInfoReducer,
    userDB: userDBReducer,
    board: boardReducer,
  }),
  { userinfo: userInfoIni, ...userDBIni, board: boardIni },
  composeWithDevTools()
);

export default store;
