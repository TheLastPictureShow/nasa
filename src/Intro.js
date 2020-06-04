import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Intro = () => {
  return (
    <div className="app">
      <Link to="/picture" target="_blank" className="btn btn-wrapper">
        <p>Click Me</p>
      </Link>
    </div>
  );
};

export default Intro;
