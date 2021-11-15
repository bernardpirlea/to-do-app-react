import React from "react";
import ToDoList from "./ToDoList";
import { useState, useEffect } from "react";
import axios from "axios";

const Content = ({ token }) => {
  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await axios.get("http://localhost:8000/api/todo-list/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      if (res.status == 200) {
        console.log(res);
        setToDoList(res.data);
      }
    })();
  }, []);

  const markDone = (index) => {
    const newToDoList = [...toDoList];
    newToDoList[index].done = !toDoList[index].done;
    setToDoList(newToDoList);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    let newItem = { value: input, done: false };
    let newToDoList = [...toDoList, newItem];
    setToDoList(newToDoList);
    setInput("");
  };

  return (
    <main className="main">
      <form className="form col-12 col-md-7 col-lg-4">
        <div className="form-group col-8">
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            value={input}
          />
        </div>
        <button onClick={handleClick} className="btn btn-primary col-3">
          Add
        </button>
      </form>
      <ToDoList toDoList={toDoList} markDone={markDone} />
    </main>
  );
};

export default Content;
