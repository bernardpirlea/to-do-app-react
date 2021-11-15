import React from "react";
import Content from "./todopage/Content";
import "./css/ToDoPage.css";

const ToDoPage = ({ token }) => {
  return <Content token={token} />;
};

export default ToDoPage;
