import React, { useState, useEffect } from "react";
import ApodCard from "./ApodCard";
import axios from "axios";
// import "./Apod.css";
import styled from "styled-components";

const ApodContainer = styled.div`
  background: #a1001c;
  padding-bottom: 50px;
`;

const ApodH2 = styled.h2`
  margin: 0;
  padding: 30px;
  color: #f3f3f3;
  font-size: 2.2rem;
`;

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
    <ApodContainer>
      <ApodH2>Astronomy Picture of the Day</ApodH2>
      <div className="apod">
        <ApodCard
          url={apodData.url}
          title={apodData.title}
          explanation={apodData.explanation}
          copyright={apodData.copyright}
          date={apodData.date}
        />
      </div>
    </ApodContainer>
  );
};

export default Apod;
