import React, { useState, useEffect } from "react";
import ApodCard from "./ApodCard";
import axios from "axios";
import "./Apod.css";

const Apod = () => {
  const [apodData, setApodData] = useState([]);

  useEffect(updateApodData => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=tABcpssFV4WV6HGIKwvNDrBrvMAFJkgKXqHwXy29",
      )
      .then(res => {
        console.log(res.data);
        setApodData(res.data);
        console.log(apodData);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="apod-container">
      <h2>Astronomy Picture of the Day</h2>
      <div className="apod">
        <ApodCard
          url={apodData.url}
          title={apodData.title}
          explanation={apodData.explanation}
          copyright={apodData.copyright}
          date={apodData.date}
        />
      </div>
    </div>
  );
};

export default Apod;
