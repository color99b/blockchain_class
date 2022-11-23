import { Link } from "react-router-dom";
import { useState } from "react";
import queryString from "query-string";
function Header() {
  const [searchStr, setSearchStr] = useState("");
  return (
    <div>
      <Link to="/">Home</Link> l <Link to="/login">Log in</Link>
      <Link to="log/in">Log in 2</Link> <Link to="log/out">Log out 2</Link>
    </div>
    // link는 a태그 대신 사용한다. a태그는 localhost에서 naver 같은 곳으로 이동할때
  );
}

export default Header;
