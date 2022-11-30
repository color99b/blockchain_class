import styled from "styled-components";
const ListComponent = () => {
  // console.log(tempArr.tempArr[2].title);
  // for(let i =0; i<tempArr.tempArr.length; i++){
  //   const tempTitle = tempArr.tempArr.userName;
  //   const tempText = tempArr.tempArr.userName;
  //   const tempTitle = tempArr.tempArr.userName;

  // }
  // console.log(test);
  return (
    <>
      <Fbox>
        <div className="title">제목</div>
        <div className="text">내용</div>
        <div className="name">작성자</div>
        <div className="time">시간</div>
      </Fbox>
      <div id="listBox"></div>
    </>
  );
};

export default ListComponent;

const Fbox = styled.div`
  display: flex;
  justify-content: space-around;
`;
