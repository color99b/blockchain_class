import { useParams } from "react-router-dom";

function In() {
  const params = useParams();
  //라우터에 정해진 라우터가 아니라 변할 수 있는 값이 들어왔을때 받는 hook
  // route 에서는 '/:이름' 이라고 구현한다.
  // /src/components/Log/index.jsx 에서 userId라고 이름을 선언했으며 params.userId로 가져올 수 있다.
  console.log(params);
  return <div>In!</div>;
}

export default In;
