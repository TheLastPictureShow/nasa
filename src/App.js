import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Picture from "./Picture";
import Intro from "./Intro";

import "./style.css";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Route path="/" exact component={Intro} />
          <Route path="/picture" exact component={Picture} />
        </div>
      </Router>
    </div>
  );
};

export default App;
