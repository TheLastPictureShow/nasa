import React, { useState, useEffect } from "react";
import "./style.css";

const Picture = () => {
  const API_KEY = "r4dyCJxbEZRRj4JH7jrInNzLp0dqX8sHfbHuM8b5";

  const [picture, setPicture] = useState("");

  useEffect(() => {
    getPicture();
  }, []);

  const getPicture = async () => {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    );
    const data = await response.json();
    setPicture(data);
    console.log(picture);
  };

  return (
    <div className="picture">
      <div className="photo-wrapper">
        <img src={picture.url} alt={picture.title} />
      </div>

      <div className="title">
        <p className="text">Astronomy Picture of the Day</p>
        <p className="text">Title: {picture.title}</p>
      </div>
      <div className="explanation">
        <p className="text">{picture.explanation}</p>
      </div>
    </div>
  );
};

export default Picture;
