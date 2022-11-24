import styled from "styled-components";

function DefaultBtn({ text }) {
  return <Btn>{text}</Btn>;
}

export default DefaultBtn;

const Btn = styled.button`
  width: 120px;
  height: 50px;
  background-color: beige;
  border: 1px solid black;
  border-radius: 15px;
  cursor: pointer;
`;
