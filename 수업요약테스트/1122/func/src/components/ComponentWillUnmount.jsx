import { useEffect } from "react";

function componentWillUnmount() {
  useEffect(() => {
    //여기에 update 실행할 코드를 적는다.
  });
  return <div></div>;
}
//이거랑 저거랑 차이가 없다.
export default componentWillUnmount;
