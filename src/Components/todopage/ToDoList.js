import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDoList, markDone }) => {
  return (
    <ul className="to-do-list">
      {toDoList.map((item, index) => (
        <ToDoItem item={item} key={index} index={index} markDone={markDone} />
      ))}
    </ul>
  );
};

export default ToDoList;
