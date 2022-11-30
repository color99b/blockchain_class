import styled from "styled-components";

const InfoComponent = ({ userName, onClick }) => {
  console.log(userName + "123123");
  return (
    <InfoBox>
      {userName}님 어서오세요
      <button
        onClick={() => {
          onClick();
        }}
      >
        log Out
      </button>
    </InfoBox>
  );
};

export default InfoComponent;

const InfoBox = styled.div``;
