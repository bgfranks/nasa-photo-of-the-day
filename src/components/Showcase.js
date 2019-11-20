import React from "react";
import "./Showcase.css";

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="showcase-text">
        <h1>NASA APOD</h1>
        <p>See the Daily Astronomy Picture!</p>
        <a
          className="showcase-btn"
          href="https://apod.nasa.gov/apod/astropix.html"
        >
          See More
        </a>
      </div>
    </div>
  );
};

export default Showcase;
