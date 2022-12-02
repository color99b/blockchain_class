import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import RegistContainer from "./Regist/Container";
import LoginContainer from "./Login/Container";
import InfoContainer from "./Info/Container";
import { connect } from "react-redux";
const UserComponet = ({ userName }) => {
  return (
    <UserBox>
      <div>
        <Link to={"/"}>Home</Link>
        {userName ? (
          <></>
        ) : (
          <>
            {" "}
            | <Link to={"/regist"}>Regist</Link> |{" "}
            <Link to={"/login"}>login</Link>{" "}
          </>
        )}
      </div>
      {userName ? <InfoContainer /> : <></>}
      <Routes>
        <Route path="/regist" element={<RegistContainer />} />
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
    </UserBox>
  );
};

const mapStateToProps = (state, props) => {
  return {
    userName: state.userinfo.userName,
  };
};

export default connect(mapStateToProps)(UserComponet);

const UserBox = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
`;
