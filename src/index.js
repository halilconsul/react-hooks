import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import TopBar from "components/TopBar";
import Routes from "pages/routes";
import { CurrentUserProvider } from "contexts/currentUser";
import CurrentUserChecker from "components/CurrentUserChecker";
import './App.css';

const App = () => {
  return (
      <div>Apspsp</div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
