import store from "../../../modules/store";
import RegistComponent from "./Component";
import { action } from "../../../modules/userDB";
import axios from "axios";
const RegistContainer = () => {
  //1. onclick을 선언한다.
  const onClick = (userId, userPw, userName) => {
    // 5. onClick을 호출당했다. 매개변수로 userId, userPw, userName를 받았다.
    console.log("5. RegistContainer onClick => 6. dispatch");
    // 6. store의 dispatch를 호출했다. 매개변수로 action의 regist를 호출해 return값을 전달했다. => dispatch 호출보다 action의 regist 호출이 먼저 실행된다.
    // 7. action의 regist를 호출했다. userId, userPw, userName를 매개변수로 전달했다.
    // 10. dispatch를 호출했다. action.regist의 return 값(반환값, == 액션)을 매개변수로 전달했다.
    // 11. dispatch는 reducer를 호출하며 액션을 매개변수로 전달한다.
    store.dispatch(action.regist(userId, userPw, userName));
    axios.post("http://localhost:8080/api/user/regist", {
      userId,
      userPw,
      userName,
    });
  };
  //화살표 함수
  // () => ({}) < ()는 안에 있는 값을 반환. return문 없이. 지금은 객체{}반환

  // () => [] < []는 함수가 리턴하는 배열이다.
  // () => {} < {}는 함수의 내용이다.
  // () => {return {}} < {}는 함수의 내용, return {} 는 반환값.
  // ()=> ({a:1}) === () => {return {a:1};} == function (){return {a:1};}
  // () => [] === () => {return [];}
  // (a) => {return a+1;} == function (a) {return a+1;}

  console.log("2.컨테이너", onClick);

  //2. onclick을 RegistComponet에 props로 전달한다.
  return <RegistComponent onClick={onClick} />;
};

export default RegistContainer;
