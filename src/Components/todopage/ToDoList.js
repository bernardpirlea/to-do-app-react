import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDoList, markDone }) => {
  return (
    <ul className="to-do-list col-12 col-md-7 col-lg-4">
      {toDoList.map((item, index) => (
        <ToDoItem item={item} key={index} index={index} markDone={markDone} />
      ))}
    </ul>
  );
};

export default ToDoList;
