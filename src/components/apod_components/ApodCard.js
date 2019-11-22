import React from "react";
import "./ApodCard.css";
import styled from "styled-components";

const ApodCardContainer = styled.div`
  height: 100%;
  width: 80%;
  margin-left: 7%;
  border: 1px solid #5c9ead;
  border-radius: 10px;
  padding: 0 20px;
  background: #f3f3f3;
  color: #333;
`;

const ApodImg = styled.img`
  height: 50vh;
  width: auto;
  border-radius: 10px;
`;

const ApodH3 = styled.h3`
  font-size: 1.5rem;
`;

const ApodPara = styled.p`
  padding: 0 50px;
  line-height: 1.4;
`;

const ApodCard = props => {
  return (
    <ApodCardContainer>
      <ApodH3>{props.title}</ApodH3>
      <ApodImg src={props.url} alt="Apod" />
      <ApodPara>{props.explanation}</ApodPara>
      <ApodPara>Copyright: {props.copyright}</ApodPara>
      <ApodPara>{props.date}</ApodPara>
    </ApodCardContainer>
  );
};

export default ApodCard;
