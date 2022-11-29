import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import { initialize } from "./modules/user";

import { reducer } from "./modules/user";

const store = createStore(reducer, {}, composeWithDevTools());

export default store;
