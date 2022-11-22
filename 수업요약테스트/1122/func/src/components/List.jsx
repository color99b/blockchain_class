// import styled from "styled-components";
import { useState } from "react";
export default function List() {
  const [listArr, setListArr] = useState([
    { text: "asdf1", user: "dPwls" },
    { text: "asdf2", user: "dPwls" },
    { text: "asdf3", user: "dPwls" },
    { text: "asdf4", user: "dPwls" },
    { text: "asdf5", user: "dPwls" },
  ]);

  return (
    <div>
      {listArr.map((item, index) => (
        <div>
          <div key={`${index}-1`}>{item.text}</div>
          <div key={`${index}-2`}>{item.user}</div>
        </div>
      ))}
    </div>
  );
}
