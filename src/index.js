import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "contexts/currentUser";
import TopBar from "components/TopBar";
import CurrentUserChecker from "components/CurrentUserChecker";
import Routes from "pages/routes";
import "./App.css";

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <TopBar />
          <Routes />
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
