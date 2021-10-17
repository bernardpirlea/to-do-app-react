import "./App.css";
import { Route } from "react-router";
import HomePage from "./Components/HomePage";
import ToDoPage from "./Components/ToDoPage";
import { useState } from "react";

function App() {
  const [token, setToken] = useState();
  const updateToken = (value) => {
    setToken(value);
  };
  return (
    <div className="App">
      {!token && (
        <Route
          exact
          path="/"
          render={(props) => <HomePage {...props} setToken={updateToken} />}
        />
      )}
      {token && <Route exact path="/" component={ToDoPage} />}
    </div>
  );
}

export default App;
