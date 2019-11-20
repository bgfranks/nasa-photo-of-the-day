import React from "react";
import "./ApodCard.css";

const ApodCard = props => {
  return (
    <div className="apod-card">
      <h3>{props.title}</h3>
      <img src={props.url} alt="Apod" />
      <p>{props.explanation}</p>
      <p>Copyright: {props.copyright}</p>
      <p>{props.date}</p>
    </div>
  );
};

export default ApodCard;
