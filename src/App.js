import "./App.css";
import Content from "./Components/Content";
import Header from "./Components/Header";
import { Route } from "react-router";
import HomePage from "./Components/HomePage";
import ToDoPage from "./Components/ToDoPage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/todo-list" component={ToDoPage} />
    </div>
  );
}

export default App;
