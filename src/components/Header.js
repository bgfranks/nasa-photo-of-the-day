import React from "react";
import logo from "../img/nasa_logo.jpeg";
// import "./Header.css";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 30px;
  border-bottom: 1px solid #0b3d91;
`;

const LogoImg = styled.img`
  height: 85px;
  width: auto;
`;

const NavItem = styled.a`
  padding: 0 20px;
  font-size: 1.2rem;
  text-decoration: none;
  color: #0b3d91;
  transition: 0.3s;
  &:hover {
    font-size: 1.3rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="logo">
        <LogoImg src={logo} alt="Nasa Logo" />
      </div>
      <div className="nav">
        <NavItem src="#">Home</NavItem>
        <NavItem src="#">About</NavItem>
        <NavItem src="#">Media</NavItem>
        <NavItem src="#">Contact</NavItem>
      </div>
    </HeaderContainer>
  );
};

export default Header;
