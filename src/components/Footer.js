import React from "react";
// import "./Footer.css";
import styled from "styled-components";

const FooterContainer = styled.div`
  background: #333333;
  color: #f3f3f3;
  height: 13vh;
`;

const FooterPara = styled.p`
  text-align: center;
  margin: 0;
  padding-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <footer>
        <FooterPara>Page created by Brandon Franks 2019</FooterPara>
        <FooterPara>
          NASA logo is a registered trademark of NASA 2019
        </FooterPara>
      </footer>
    </FooterContainer>
  );
};

export default Footer;
