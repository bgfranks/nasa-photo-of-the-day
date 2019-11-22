import React from "react";
// import "./Showcase.css";
import showcaseImg from "../img/showcase.jpg";
import styled from "styled-components";

const ShowcaseContainer = styled.div`
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${showcaseImg}) no-repeat center center/cover;
  color: #f3f3f3;
`;

const ShowcaseTextContainer = styled.div`
  padding-bottom: 120px;
`;

const ShowcaseH1 = styled.h1`
  font-size: 4rem;
`;

const ShowcasePara = styled.p`
  font-size: 2rem;
  padding-bottom: 10px;
`;

const ShowcaseBtn = styled.a`
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  color: #f3f3f3;
  font-size: 1.3rem;
  padding: 10px 30px;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    background: #a1001c;
    border-color: #a1001c;
    font-size: 1.4rem;
    padding: 10px 40px;
  }
`;

const Showcase = () => {
  return (
    <ShowcaseContainer>
      <ShowcaseTextContainer>
        <ShowcaseH1>NASA APOD</ShowcaseH1>
        <ShowcasePara>See the Daily Astronomy Picture!</ShowcasePara>
        <ShowcaseBtn href="https://apod.nasa.gov/apod/astropix.html">
          See More
        </ShowcaseBtn>
      </ShowcaseTextContainer>
    </ShowcaseContainer>
  );
};

export default Showcase;
