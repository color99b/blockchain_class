import Input from "./Input";
import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./SignUp";
import { useState } from "react";
function UserBox() {
  const [list, setList] = useState([
    { id: "실험용", pw: "1234", nickname: "야호" },
  ]);
  console.log(list);
  return (
    <div>
      <Input kind={"text"} id={"id"} />
      <Input kind={"password"} id={"pw"} />

      <Link to={"signin"}>
        <button>Sign in</button>
      </Link>

      <Link to={"signup"}>
        <button>Sign up</button>
      </Link>
      <Routes>
        <Route
          path={"signin"}
          // element={}
        />
        <Route path={"signup"} element={<SignUp></SignUp>} setList={setList} />
      </Routes>
    </div>
  );
}

export default UserBox;
