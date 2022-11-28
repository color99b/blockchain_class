import { combineReducers } from "redux";
//전달받은 reducer 의 모음 객체를 하나로 묶어준다.

import count1 from "./count1";
import count2 from "./count2";
import tempArr from "./tempArr";

export default combineReducers({ count1, count2, tempArr });
//하나로 통합된 reducer 메서드를 반환한다.
