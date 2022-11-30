import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  initialize as userInfoIni,
  reducer as userInfoReducer,
} from "./userInfo";
import { initialize as userDBIni, reducer as userDBReducer } from "./userDB";
import { initialize as newBoard, reducer as newBoardReducer } from "./newBoard";

const store = createStore(
  combineReducers({
    userinfo: userInfoReducer,
    userDB: userDBReducer,
    newBoard: newBoardReducer,
  }),
  { userinfo: userInfoIni, ...userDBIni },
  composeWithDevTools()
);

export default store;
