import "./App.css";
import { Route } from "react-router";
import HomePage from "./Components/HomePage";
import ToDoPage from "./Components/ToDoPage";
import { useState } from "react";

const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    if (userToken) {
      return userToken;
    }
  };
  const updateToken = (token) => {
    localStorage.setItem("token", JSON.stringify(token));
    setToken(token);
  };
  const [token, setToken] = useState(getToken());
  return {
    updateToken: updateToken,
    token,
  };
};

function App() {
  const { token, updateToken } = useToken();

  if (!token) {
    return <HomePage setToken={updateToken} />;
  }

  return (
    <div className="App">
      <ToDoPage />
    </div>
  );
}

export default App;
