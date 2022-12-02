import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  initialize as userInfoIni,
  reducer as userInfoReducer,
} from "./userInfo";
import { initialize as userDBIni, reducer as userDBReducer } from "./userDB";
import { initialize as boardIni, reducer as boardReducer } from "./board";
import { initialize as commentIni, reducer as commentReducer } from "./comment";

const store = createStore(
  combineReducers({
    userinfo: userInfoReducer,
    userDB: userDBReducer,
    board: boardReducer,
    comment: commentReducer,
  }),
  { userinfo: userInfoIni, ...userDBIni, board: boardIni, comment: commentIni },
  composeWithDevTools()
);

export default store;
