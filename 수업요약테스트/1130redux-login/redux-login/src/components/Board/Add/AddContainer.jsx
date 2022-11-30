import AddComponent from "./AddComponent";
import { connect } from "react-redux";

import store from "../../../modules/store";
import { action } from "../../../modules/newBoard";

const AddContainer = ({ userName, list }) => {
  console.log(list[0]);

  const onClick = (title, text) => {
    const date = new Date();
    const time = date.toLocaleString();
    store.dispatch(action.add(userName, title, text, time));
    // const titleBox = document.getElementsByClassName("title");
    // const textBox = document.getElementsByClassName("text");
    // const user = document.getElementsByClassName("name");
    // const timebox = document.getElementsByClassName("time");
    let listItem = list.map(function (element) {
      return `${element.userName} ${element.title} ${element.text} ${element.time}`;
    });

    // const listBox = document.getElementById("listBox");
    // listBox.append(listItem);
  };

  return <AddComponent onClick={onClick} userName={userName} list={list} />;
};

const mapStateToProps = (state, props) => {
  return {
    userName: state.userinfo.userName,
    list: state.newBoard,
  };
};

export default connect(mapStateToProps)(AddContainer);
