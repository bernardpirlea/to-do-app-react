import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

const ToDoItem = ({ item, index, markDone }) => {
  return (
    <li className={"list-item " + (item.done ? "done" : "")} value={item.value}>
      <Checkbox style={{ color: "#4d774e" }} onChange={() => markDone(index)} />
      {item.text}
    </li>
  );
};

export default ToDoItem;
