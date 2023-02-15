import logo from "./logo.svg";
import "./App.css";
import AddBoardContainer from "./containers/AddBoard";
import { Link, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Link to={"/"}>Home</Link> | <Link to={"/new"}>New Board</Link> |{" "}
      <Link to={"/user/login"}>Log in</Link>
      <Routes>
        <Route
          path="/new"
          element={<AddBoardContainer>asdasd</AddBoardContainer>}
        />
      </Routes>
    </div>
  );
}

export default App;
