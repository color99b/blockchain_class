import { useEffect } from "react";

function ComponentDidUpdate() {
  useEffect(() => {
    //여기에 update 실행할 코드를 적는다.
    console.log("이거랑");
  });
  console.log("저거랑");
  return <div></div>;
}
//이거랑 저거랑 차이가 없다.
export default ComponentDidUpdate;
